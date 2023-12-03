import Head from "next/head";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SmallCard from "./components/SmallCard";
import MediumCard from "./components/MediumCard";
import LargeCard from "./components/LargeCard";
import Footer from "./components/Footer";

export default async function Home() {
  const data = (await getData()).props;
  const exploreData = data.exploreData;
  const cardsData = data.cardsData;
  return (
    <div className="bg-white">
      <Head>
        <title> Airbnb </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section className="text-4xl font-semibold pt-8">
          <h2>Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item: any) => (
              <MediumCard key={item.img} title={item.title} img={item.img} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          buttonText="Get Ispired"
          description="Whishlists created by Airbnb"
        />
      </main>
      <Footer />
    </div>
  );
}

async function getData() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
