import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { getStoredData, removeItemFromLs } from "../../Utilities/Utility";
import { useLoaderData } from "react-router";
import ReadList from "./ReadList";
import WishList from "./WishList";
import Sortby from "./Sortby";

const Listed = () => {
  const booksData = useLoaderData()  
  const [myReadList, setMyReadList] = useState([])
  const [myWishList, setMyWishList] = useState([])


  // Read List
  useEffect(() => {
    const lsData = getStoredData('readlist').map(Number)
    const showBook = booksData.filter(book => lsData.includes(book.bookId))
    setMyReadList(showBook)
  }, [booksData])
  
  const removeHandleBtn = (id) => {
    removeItemFromLs('readlist',id)
    const filteredItems = myReadList.filter(book => book.bookId !== id)
    setMyReadList(filteredItems)
  }


  // Wish List
  useEffect(() => {
    const lsData = getStoredData('wishlist').map(Number)
    const showBook = booksData.filter(book => lsData.includes(book.bookId))
    setMyWishList(showBook)
  }, [booksData])

  const removeHandleBtnFromWishList = (id) => {
    removeItemFromLs('wishlist',id)
    const filteredItems = myWishList.filter(book => book.bookId !== id)
    setMyWishList(filteredItems)
  }


  return (
    <section className="max-w-7xl mx-auto px-8">
      <div className="h-24 rounded-2xl bg-[#13131310] flex justify-center items-center my-8">
        <h1 className="font-bold text-[28px]">Books</h1>
      </div>

      <Sortby></Sortby>

      <section className="pb-10">
        <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>


          {/* Read List */}

        <TabPanel>
            <div className="my-8">
              {
              myReadList.map(readedBook => <ReadList 
              removeHandleBtn={removeHandleBtn}
              key={readedBook.bookId} 
              readedBook={readedBook}></ReadList>)
            }
            </div>
        </TabPanel>


            {/* Wishlist */}

        <TabPanel>
            <div className="my-8">
              {
              myWishList.map(whishBook => <WishList 
              removeHandleBtnFromWishList={removeHandleBtnFromWishList}
              key={whishBook.bookId} 
              whishBook={whishBook}></WishList>)
            }
            </div>
        </TabPanel>
      </Tabs>
      </section>
    </section>
  );
};

export default Listed;
