import Navbar from "../ui-components/dashboard/navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col content-center gap-2 md:py-32 md:px-[21rem] md:overflow-hidden">
        <div className="w-full rounded-md bg-indigo-900/25">
          <Navbar/>
        </div>
        <div className="flex-grow p-4 rounded-md bg-indigo-900/25 md:overflow-x-auto md:p-8">{children}</div>
      </div>
    );
  }

  //all components are from the ui-components folder
  //dashboard layout, navbar at the top, with a window, that shows the current selected navbar option