import React from "react";
import Question from "@/components/forum-page/question";
import Answer from "@/components/forum-page/answer";
import profile from "@/assets/images/man-cartoon.png"
import Image from "next/image";

function page() {

const answer=[
    {
        id:1,
        name: "Username1",
        post: "4th year Btech Student",
        image: profile,
        answer:"Nowadays, HRs give more weightage to your skills rather than the mode of degree. Coming to the validity of your online degree in top MNCs you do not have to worry about it as it is very well accepted provided you have completed it from a recognized university and meet the skill requirements of the job profile. In addition to this, the time management skills you learn in your online program are highly admired."
    },
    {
        id:2,
        name: "Username2",
        post: "4th year Btech Student",
        image: profile,
        answer:"Nowadays, HRs give more weightage to your skills rather than the mode of degree. Coming to the validity of your online degree in top MNCs you do not have to worry about it as it is very well accepted provided you have completed it from a recognized university and meet the skill requirements of the job profile. In addition to this, the time management skills you learn in your online program are highly admired."
    },
    {
        id:3,
        name: "Username3",
        post: "4th year Btech Student",
        image: profile,
        answer:"Nowadays, HRs give more weightage to your skills rather than the mode of degree. Coming to the validity of your online degree in top MNCs you do not have to worry about it as it is very well accepted provided you have completed it from a recognized university and meet the skill requirements of the job profile. In addition to this, the time management skills you learn in your online program are highly admired."
    },
]

const popularQuestion=[
    {
        id:1,
        content:"Do HR of top MNCs accept online degrees?"
    },
    {
        id:1,
        content:"Is online university degree valid for government and private jobs?"
    },
    {
        id:1,
        content:"What is the importance of approvals and what are they?"
    },
    {
        id:1,
        content:"How does Online MBA fare with other degree-granting full-time programmes at IIM Ahmedabad?"
    },
    {
        id:1,
        content:"Can I join ISRO, after MSC physics?"
    },
]

  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-10 m-10 ">
      <div className="lg:col-span-3">
        <Question/>
        <p className=" my-8 text-lg font-medium">All Answers (3)</p>
        {answer.map( (ans)=>{
            return(
                <div className="my-10" key={ans.id}>
                    <Answer name={ans.name} post={ans.post} answer={ans.answer} image={ans.image}  />
                </div>
            )
        } )}
        

      </div>

      <div className="lg:col-span-1">
      <div className="rounded-lg border-2 border-[#82abf7]">
            <div className="p-4 text-white rounded-t-lg font-medium text-lg bg-[#82abf7]">Popular Questions</div>
            <div className="m-4">
                {popularQuestion.map( (ques)=>{
                    return(
                        <div className="mt-3 lg:text-sm xl:text-base font-medium" key={ques.id}>
                            {ques.content}
                            <hr className="border-[#6697FC] my-4" />
                        </div>
                        
                    )
                } )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
