import "./home.css";
import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Space, Tag } from 'antd';

const FilteredData = () => {
    const [filter, setFilter] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        getPostDetails()
    }, [])

    const getPostDetails = async () => {
        let leftSideInfo = await fetch('http://localhost:8001/submitGet-form')
        let response = await leftSideInfo.json()
        setDetails(response)
    }

    useEffect(() => {
        const storedLoginDetailsString = localStorage.getItem('Fullname');
        const filteredData = details.filter((item) => {
            return item.fullname === storedLoginDetailsString;
        });

        setFilter(filteredData);
    }, [details])

    return (
        <div>
            <Row>
                <Col span={19}>
                    <div className="bolgData">
                        {filter?.map((Content) => {
                            return <>
                                <h2>{Content.title}</h2>
                                <p>By {Content.fullname}</p>

                                <div>{Content.content}</div>
                                <br />
                                <span
                                    style={{
                                        marginRight: 8
                                    }}
                                >
                                    Categories:
                                </span>
                                <Space size={[0, 8]} wrap>
                                    {Content.category.map((val) => {
                                        return <Tag
                                            // key={tag}
                                            color="purple"
                                        >
                                            {val}
                                        </Tag>
                                    })}
                                </Space>
                                <p>Posted on : {Content.createdAt}</p>
                                <Divider />
                            </>
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default FilteredData;