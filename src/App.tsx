import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import { Formik } from "formik";
import News from "./components/News";

const { Header, Content } = Layout;

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <Layout>
      <Header style={{ backgroundColor: "aqua" }}>
        <h1>ALL YOUR GOOD ARTICLE IS HERE !</h1>
      </Header>
      <Content style={{ padding: "20px", backgroundColor: "white" }}>
        <Formik
          onSubmit={(val) => {
            setKeyword(val.keyword);
          }}
          initialValues={{ keyword: "" }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                onChange={props.handleChange}
                value={props.values.keyword}
                name="keyword"
              />
              <button type="submit">search</button>
            </form>
          )}
        </Formik>
        <News keyword={keyword} />
      </Content>
    </Layout>
  );
}

export default App;
