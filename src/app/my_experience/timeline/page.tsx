import { GalleryCarousel } from "~/component/gallery-carousel";
import NavBar from "~/component/navbar";
import { Card, CardContent } from "~/components/ui/card"
export default function Timeline() {
    const timeline = [{ date: "15 November 2003", title: "Jian Min's Birthday!", description: "", image: "../../images/timeline-1.png" }, { date: "15 November 2003", title: "Primary School", description: "I studied at Evergreen Primary School, I attended CCAs, which includes: Choir and Library.", image: "../../images/timeline-2.jpg" }];
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-900">
            <NavBar />
            <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-center pt-10 text-white sm:text-[5rem]">
                    <span className="text-red-200">M</span>y <span className="text-blue-200">Ti</span>m<span className="text-emerald-100">e</span>l<span className="text-violet-200">i</span>n<span className="text-yellow-100">e</span>
                </h1>
                <div className="container mx-auto w-full h-full">
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        {timeline.map((item, key) => (
                            <li key={key} className="mb-10 ms-6">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <Card className="w-full">
                                    <CardContent className="p-5">
                                        <time className="mb-1 text-sm font-normal text-gray-400">{item.date}</time>
                                        <div className="text-2xl font-bold pb-3">{item.title}</div>
                                        <div className="text-lg font-normal pb-3 text-gray-800">{item.description}</div>
                                        <div className="relative h-[250px]">
                                            <img src={item.image} alt="Timeline" className="w-full h-full object-cover rounded-t-lg" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </li>
                        ))}


                    </ol>
                </div>
            </div>
        </main>
    );
}
