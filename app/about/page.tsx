import CircleSocials from "../components/CircleSocials";

function page() {
  return (
    <div className="mains pt-20">
      <div className="flex flex-col h-96 pt-52 items-center justify-center bg-cyan-200 gap-10">
        <h1 className="text-4xl pageHeader">About Page</h1>
        <p className="mx-10 pageContent text-center line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna
          auctor, viverra sapien. Donec euismod turpis eget massa lobortis, eget
          scelerisque justo.
        </p>
      </div>
      <CircleSocials />
    </div>
  );
}

export default page;
