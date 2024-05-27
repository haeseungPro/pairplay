import React, { useState, useEffect } from "react";

const Test = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        setName("테스트 데이터");
    }, []);

    return <div>{isLoading ? "로딩중" : <div>{name}</div>}</div>;
};

export default Test;
