import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import ErrorPages from "../Pages/ErrorPage/ErrorPages";
import BookDetails from "../Pages/Books/BookDetails";
import Listed from "../Pages/Read List/Listed";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [ 
        {
            index: true,
            Component: Home
        },
        {
          path: '/bookDetails/:id',
          loader:()=> fetch('/booksData.json'),
          Component: BookDetails
        },
        {
          path: "/listed-books",
          loader:()=> fetch('/booksData.json'),
          Component: Listed
        }
    ]
  },
]);