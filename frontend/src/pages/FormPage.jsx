import React, {useEffect, useState} from "react";
import Form from "../components/Form";

import api from '../utils/handleApi'

function FormPage() {
  const [data, setData] = useState(null ?? []);

  useEffect(() => {
    api.fetchData(setData);
  }, []);

  return (
    <>
      <Form data={data}/>
    </>
  );
}

export default FormPage;
