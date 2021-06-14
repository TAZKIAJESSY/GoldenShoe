import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Spinner } from "react-bootstrap";
import "./HomePage.css";

import ProductCard from "../component/ProductCard";
import { fetchCategoryList } from "../store/category/actions";
import { fetchProductList } from "../store/product/actions";
import { selectCategories } from "../store/category/selectors";
import {
  selectProduct,
  selectProductLoading,
} from "../store/product/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const cat = useSelector(selectCategories);
  const items = useSelector(selectProduct);
  const loading = useSelector(selectProductLoading);

  const [searchText, set_searchText] = useState();
  const [filterCategory, set_filterCategory] = useState();
  const [sortText, set_sortText] = useState();

  useEffect(() => {
    dispatch(fetchCategoryList);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductList);
  }, [dispatch]);

  const filterItems = filterCategory
    ? items.filter((r) => {
        return r.categoryId === parseInt(filterCategory);
      })
    : items;

  const searched = searchText
    ? filterItems.filter((p) =>
        p.name.toUpperCase().includes(searchText.toUpperCase())
      )
    : filterItems;

  const comparePrice = (a, b) => {
    return a.price - b.price; //ascending order
  };

  const changeSorting = (event) => {
    set_sortText(event.target.value);
  };

  const product_sorted =
    sortText === "Price" ? [...searched].sort(comparePrice) : searched;

  return (
    <div className="container-fluid">
      <h1>Two Unequal Responsive Columns</h1>
      <p>Resize the browser window to see the effect.</p>

      <div className="row">
        <div className="col-sm-4 " style={{ marginTop: 30 }}>
          <div className="">
            <p className="styleBox">Search Your Desired Shoes</p>

            <form>
              <input
                style={{ width: 300, height: 30 }}
                type={searchText}
                onChange={(e) => set_searchText(e.target.value)}
                placeholder="Search..."
              />
            </form>
          </div>
          <br />
          <div className="">
            <p className="styleBox">Find Your Category</p>
            <br />
            <select
              style={{ width: 300, height: 30 }}
              onChange={(e) => {
                set_filterCategory(e.target.value);
              }}
            >
              <option>Select category: </option>
              {cat ? (
                cat.map((c, index) => {
                  return (
                    <option key={index} value={c.id}>
                      {c.name}
                    </option>
                  );
                })
              ) : (
                <></>
              )}
            </select>{" "}
          </div>
          <br />
          <div className="">
            <p className="styleBox">Sort By Price</p> <br />
            <select
              style={{ width: 300, height: 30 }}
              placeholder="Sort"
              onChange={changeSorting}
            >
              <option value="">Select an option</option>
              <option value="Price">Price</option>
            </select>
          </div>
        </div>
        <div className="col-sm-8">
          {" "}
          <div>
            {loading ? (
              <div
                className="d-flex justify-content-center align-items-center mt-5"
                style={{ height: 700, margin: "auto" }}
              >
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <div>
                <div className="row">
                  {product_sorted ? (
                    product_sorted.map((p, index) => {
                      return (
                        <div
                          className=""
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            flexFlow: "wrap",
                            // border: "1px solid #ddd",
                            margin: "20px",
                            padding: "10px",
                            // boxShadow: "2px 8px 20px #ddd",
                            borderRadius: "10px",
                          }}
                          key={index}
                        >
                          <ProductCard
                            id={p.id}
                            name={p.name}
                            imageUrl={p.imageUrl}
                            price={p.price}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <p></p>
                  )}{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
