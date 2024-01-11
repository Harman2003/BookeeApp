import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loader = () => {
    return (
      //   <div className=" pb-12 rounded-lg bg-white shadow-lg shadow-black/5 border border-[#CBD2E1]">
      //         <div className="flex justify-around text-lg font-medium py-3 border-b border-[#CBD2E1]">
      //             <Skeleton className="w-[590px] h-[60px] p-1"/>
      //     </div>

      //   </div>
      <div className="flex flex-col gap-2">
        <SkeletonTheme baseColor="#e6e6e6" highlightColor="#f7f5f5">
          <Skeleton className="w-[600px] h-[50px]" />
          <Skeleton className="w-[600px]" count={4} />
          <Skeleton className="w-[600px] h-[50px]"/>
          <Skeleton className="w-[600px]" count={6} />
          <Skeleton className="w-[600px] h-[50px]" />
        </SkeletonTheme>
      </div>
    );
};

export default Loader;
