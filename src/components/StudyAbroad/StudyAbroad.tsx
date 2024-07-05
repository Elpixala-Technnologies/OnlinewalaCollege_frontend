import React from "react";
import Image from "next/image";
import abroad from "@/assets/images/abroad1.png";
import abroad1 from "@/assets/images/abroad.png";

function StudyAbroad() {
  return (
    <div className="m-8 rounded-lg bg-white">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <div className="col-span-2">
          <div className="relative">
            <Image src={abroad} alt="image" className="rounded-xl" />
            <div className="h-32 w-3/4 blur-2xl bg-[#231A1F] absolute bottom-3 left-6"></div>
            <p className="mx-8 my-6 absolute bottom-8 font-bold text-xl text-white">
              WB Class 10th PPR, PPs result out at ......
            </p>
            <p className="mx-8 font-medium text-sm text-slate-300 absolute bottom-6">
              18 June, 2024
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="mt-4 md:mt-0">
            <div>
              <Image src={abroad1} alt="image" className="rounded-lg" />
            </div>
            <p className="mt-3 text-base font-semibold">
              UP cabinet clears ordinance to curb paper leaks, offenders to face
              life imprisonment
              <span className="mt-3 text-sm block text-slate-500">
                June 18, 2024
              </span>
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="mt-4 md:mt-0">
            <div>
              <Image src={abroad1} alt="image" className="rounded-lg" />
            </div>
            <p className="mt-3 text-base font-semibold">
              UP cabinet clears ordinance to curb paper leaks, offenders to face
              life imprisonment
              <span className="mt-3 text-sm block text-slate-500">
                June 18, 2024
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyAbroad;
