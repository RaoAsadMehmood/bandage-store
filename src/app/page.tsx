"use client";
import HomePage  from "./components/HomePage";


const Home = () => {

  return (
    <>
      <HomePage />
      
      {/* <div className="min-h-screen bg-gray-50">

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Latest Collection
          </h1>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-4 text-gray-600">Products are being loaded please wait...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">{error}</div>
          ) : (
            
          )}
        </section>
      </div> */}
    </>
  );
};

export default Home;