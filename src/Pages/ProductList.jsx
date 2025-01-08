import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import loadigImg from "../image/loading.svg";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/products.css";
import ProductTile from "../Componets/ProductTile";
import { InputGroup, Form, Button } from "react-bootstrap";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [query, setquery] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        // console.log(result);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const handleSearch = (ev) => {
    ev.preventDefault();
    const filtered = data.filter((product) => {
      // console.log(product.title.toLowerCase());
      console.log(product.title.toLowerCase().includes(query.toLowerCase()));
      if (product.title.toLowerCase().includes(query.toLowerCase()))
        return product;
      else if (product.description.toLowerCase().includes(query.toLowerCase()))
        return product;
    });
    setFilterData(filtered);
    // console.log(filterData);
  };

  const keyWordChangeHandle = (ev) => {
    setquery(ev.target.value);
  };

  if (loading)
    return (
      <>
        <img className="loadingImg" src={loadigImg} alt="" />
      </>
    );
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <Container>
        <Form onSubmit={handleSearch}>
          <InputGroup className="mb-3 my-5">
            <Form.Control
              onChange={keyWordChangeHandle}
              placeholder="Search For Product"
              aria-label="Search For Product"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={handleSearch}
            >
              <SearchOutlinedIcon />
            </Button>
          </InputGroup>
        </Form>

        <Row className="my-2">
          {filterData.map((item) => (
            <Col xs={12} sm={12} md={6} lg={4} xxl={3}>
              <div style={{ paddingTop: "10px", height: "100%" }}>
                <ProductTile data={item}> </ProductTile>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
