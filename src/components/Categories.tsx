import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux Toolkit/store";
import { useEffect } from "react";
import { fetchData } from "../Redux Toolkit/features/category/categorySlice";
import { message, Table, Typography } from "antd";
import type { ColumnGroupType } from "antd/es/table";

interface Category {
  title: string;
  dataIndex: string;
  width?: string;
  render: void
}

const Categories: React.FC = () => {
  const categories = useSelector((state: RootState) => state.category.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const columns: ColumnGroupType<Category> = [
    {
      title: 'Image',
      dataIndex: 'image',
      width: '25%',
      render: (imgurl: string) => <img width={100} src={imgurl} alt={imgurl} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
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

export default Categories;
