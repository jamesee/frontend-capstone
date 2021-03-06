import { useGalleryListings } from "domains/gallery";
import * as React from "react";
import { Button } from "components/button";
import { GalleryItem, ImageSearch } from "domains/gallery";

export const Gallery = () => {
  const { pagination, setPagination, isLoading, setQueryTerm, galleryListings } = useGalleryListings();


  return (

    <main className="bg-gray-50 lg:flex">

      <div className="flex-1">
        <div className="max-w-7xl mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-pink-700 sm:text-center">
              Image Gallery
            </h1>
          </div>

          {/*  =============== Prev & Next buttons ============  */}
          <div className="flex justify-between">
            <Button
              type="button"
              className="
                      w-30 h-10
                      bg-transparent 
                      hover:bg-pink-600 
                      text-pink-700 
                      font-semibold 
                      hover:text-white 
                      py-2 px-10 
                      border 
                      border-pink-600 
                      hover:border-transparent 
                      rounded-2xl
                      focus:ring-pink-900
                      m-2
                      my-5
                    "
              disabled={pagination.page === 1}
              onClick={() => setPagination({...pagination, page: parseInt(pagination.page-1)})}
            >
              Prev
            </Button>

            <div className="flex justify-center">

            {/* <ImageSearch searchText={(text) => { if (text) setQueryTerm(text) }} /> */}
            <ImageSearch 
                pagination={pagination}
                setPagination={setPagination}
                searchText={(queryTerm) => { if (queryTerm) setQueryTerm(queryTerm) }} />
            
            <Button
              type="button"
              className="
                      w-30 h-10
                      bg-transparent 
                      hover:bg-pink-600 
                      text-pink-700 
                      font-semibold 
                      hover:text-white 
                      py-2 
                      border 
                      border-pink-600 
                      hover:border-transparent 
                      rounded-2xl
                      focus:ring-pink-900
                      mx-2
                      my-5
                    "
              onClick={() => {setPagination({...pagination, page: parseInt(Math.random() * 1000)})}}
            >
              RANDOM
            </Button>
            </div>


            <Button
              type="button"
              className="
                      w-30 h-10
                      bg-transparent 
                      hover:bg-pink-600 
                      text-pink-700 
                      font-semibold 
                      hover:text-white 
                      py-2 px-10 
                      border 
                      border-pink-600 
                      hover:border-transparent 
                      rounded-2xl
                      focus:ring-pink-900
                      m-2
                      my-5
                    "
              onClick={() => setPagination({...pagination, page: parseInt(pagination.page+1)})}
            >
              Next
            </Button>
          </div>
          {/*  =============== product ul start ============  */}
          <div className="
                          grid
                          md:grid-cols-2
                          gap-x-4 gap-y-8
                          xl:grid-cols-3 xl:gap-x-6
              ">
            {/*  =============== product li start ============  */}
            {galleryListings && !isLoading &&
              galleryListings.map((item) => (
                <GalleryItem
                  imageId={item.id}
                  imageHeight={item.height}
                  imageWidth={item.width}
                  imageUrl={item.src.large}
                  photographer={item.photographer}
                  photographerUrl={item.photographer_url}
                  key={item.id}
                />
              ))
            }
            {
              isLoading &&
              <div className="col-span-3 text-center text-pink-600 mt-20 text-3xl font-bold">
                Loading ...
              </div>
            }
            {/* =============== product li end ============  */}
          </div>
          {/*  =============== product ul end ============ */}
        </div>
      </div>



    </main>

  );
};
