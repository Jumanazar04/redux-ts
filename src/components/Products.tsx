import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux Toolkit/store";
import { useEffect } from "react";
import { message, Table, Typography } from "antd";
import type { ColumnGroupType } from "antd/es/table";
import { fetchData } from "../Redux Toolkit/features/product/peoducts.Slice";

interface Product {
  title: string;
  dataIndex: string;
  width?: string;
  price?: number; 
  render: void
}

const Products: React.FC = () => {
  const categories = useSelector((state: RootState) => state.product.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const columns: ColumnGroupType<Product> = [
    {
      title: 'Image',
      dataIndex: 'image',
      width: '25%',
      render: (imgurl: string) => <img width={100} src={imgurl} alt={imgurl} />,
    },
    {
      title: 'Name',
      dataIndex: 'title',
    },
    {
        title: "Price",
        dataIndex: 'price'
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      render: () => (
        <Typography.Link  onClick={() => message.warning('Edit vaqtincha ishlamaydi, Noqulayliklar uchun uzur !!!')}>
          Edit
        </Typography.Link>
      ),
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      render: () => (
        <Typography.Link  onClick={() => message.warning('Delete vaqtincha ishlamaydi, Noqulayliklar uchun uzur !!!')}>
          Delete
        </Typography.Link>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <Table bordered columns={columns} dataSource={categories} size="middle" />
    </div>
  );
}

export default Products;
