import React, { useCallback, useState } from "react";
import { EverythingResponse, Articles } from "../utils";
import { Row, Col, Card, Modal, Button, Skeleton } from "antd";
import moment from "moment";

type Props = {
  data?: EverythingResponse;
  isLoading: boolean;
  keyword?: string;
};

export const NewsItem: React.FC<Props> = ({ data, isLoading, keyword }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Partial<Articles>>({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const renderItems = useCallback(() => {
    if (data && data.articles && data.articles.length > 0) {
      return data.articles.map((article) => (
        <Col style={{ marginBottom: "10px" }} span={8}>
          <Card
            title={article.title}
            style={{ width: 550, height: "600px", overflow: "auto" }}
            hoverable
            extra={
              <Button
                onClick={() => {
                  showModal();
                  setModalData(article);
                }}
              >
                preview
              </Button>
            }
            cover={
              <img
                alt="img"
                loading="lazy"
                src={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://norrismgmt.com/wp-content/uploads/2020/05/24-248253_user-profile-default-image-png-clipart-png-download.png"
                }
              />
            }
          >
            <h3>Author: {article.author}</h3>
            <span>
              published at: {moment(article.publishedAt).format("MM-DD-YYYY")}
            </span>
            <p style={{ marginTop: "10px" }}>
              {article.description}
              <a href={article.url} target="_blank" rel="noreferrer">
                More
              </a>
            </p>
          </Card>
        </Col>
      ));
    }
    return null;
  }, [data]);

  return (
    <>
      <h1 style={{ marginTop: "20px", textAlign: "center" }}>
        Search Result for keyword "{keyword}"
      </h1>
      <Row style={{ paddingTop: "20px" }}>
        {isLoading ? (
          <>
            <Col style={{ marginBottom: "10px" }} span={8}>
              <Skeleton
                style={{ width: 550, height: "600px", overflow: "auto" }}
              />
            </Col>
            <Col style={{ marginBottom: "10px" }} span={8}>
              <Skeleton
                style={{ width: 550, height: "600px", overflow: "auto" }}
              />
            </Col>
            <Col style={{ marginBottom: "10px" }} span={8}>
              <Skeleton
                style={{ width: 550, height: "600px", overflow: "auto" }}
              />
            </Col>
          </>
        ) : (
          renderItems()
        )}
      </Row>
      <Modal
        title={modalData.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalData && (
          <>
            <h3>Author: {modalData.author}</h3>
            <span>
              published at: {moment(modalData.publishedAt).format("MM-DD-YYYY")}
            </span>
            <p style={{ marginTop: "10px" }}>
              {modalData.description}
              <a href={modalData.url} target="_blank" rel="noreferrer">
                More
              </a>
            </p>
          </>
        )}
      </Modal>
    </>
  );
};
