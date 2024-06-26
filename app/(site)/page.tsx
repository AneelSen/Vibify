import getSongs from "@/actions/getSongs";
import Header from "@/components/header";
import ListItem from "@/components/list-item";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {

  const songs = await getSongs();

    return (
      <div className="bg-neutral-800 h-full w-full overflow-hidden overflow-y-auto rounded-lg">
        <Header>
          <div>
            <h1 className=" text-3xl font-semibold">Welcome back</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
              <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
            </div>
          </div>
        </Header>
        <div className="mt-2 mb-7 px-6">
          <div className="text-white text-2xl font-semibold">
            <h1>Newest Songs</h1>
          </div>
          <div className="mt-4">
            <PageContent songs={songs} />
          </div>
        </div>
      </div>
    )
  }