import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function History() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete History</h2>
          <p className="text-xl text-pws-gray">The full documented history of Portland Welding Supply</p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8 font-serif text-gray-800 leading-relaxed">
            <h3 className="text-2xl font-bold mb-6 text-pws-blue">The History Of Portland Welding Supply 1945 - 2008</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <h4 className="font-bold text-lg mb-2">Clarence Robert MacDonald</h4>
                <p className="text-pws-gray">Co-Founder</p>
                <p className="text-sm">4/23/1902 - 2/12/1975</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-lg mb-2">LeRoy John MacDonald</h4>
                <p className="text-pws-gray">Co-Founder</p>
                <p className="text-sm">8/11/1908 - 5/12/1986</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>LeRoy J (Roy) & Clarence R (Clarey or Mac) MacDonald were brought up in a two story wood frame home at 100 Granite Street in Quincy, Ma. They were two of three sons of Robert & Julie. Harold was the third.</p>

              <p>In 1932, Clarey Mac Donald (Mac) & Joe Martin Sr. were welders at the Lawley Shipyards in Neponset Mass. Bill Barron, a salesman for Air Reduction Co. calling on the welding dept. there, asked them if they'd have an interest in working for his company in South Boston. Joe & Mac started as welders the same day, along with Dorothy Cook, who later married Mac. Dot started as a sales mechanic clerk for Frank Mehaffey who was the regional sales manager.</p>

              <p>Chester Delbridge was vice president and Cliff Miller was the office manager. After only six months with the company, Joe Martin Sr. was offered a sales position covering part of Mass and Rhode Island. Mac was offered a sales position covering all northern New England.</p>

              <p>At that time, Airco distributors in Maine were Lee Randall of Lewiston Welding Supply & Ed Boulter of J. J. Boulter & Sons in Bangor. Route 1 to Boston was only a two lane road. Other Airco personnel were: Joe Warner & Fred Downes, Boston sales; Percy Magee was in sales, but committed suicide; E. E. Pettingill was VP working in New York.</p>

              <h4 className="text-xl font-bold mt-8 mb-4 text-pws-blue">The War Years</h4>
              
              <p>In 1940, Mac left Airco to take a management position in South Portland at The New England Shipbuilding Corp. building liberty ships.</p>

              <p>In early 1942, Mac, who always watched out for his younger brother, Roy, convinced him & his wife Stella to leave the Shawmut Bank of Boston, where they were bookkeepers & move to 76 Fessenden St in Portland to join him at the shipyards. Before the war ended, Roy became a lead foreman with 8 men working for him. Mac became superintendent of the West Yard with 2,000 men working for him.</p>

              <h4 className="text-xl font-bold mt-8 mb-4 text-pws-blue">The Start of Portland Welding Supply</h4>
              
              <p>During the summer of 1945, Joe convinced Clarey to start his own welding repair and supply business. Clarey sold Roy on the idea and in August, Air Reduction Co agreed to give them the hardgoods distribution business. Mac gave up arc welding and started making sales calls and deliveries. Roy continued doing gas welding (he was known as an expert, the best in the area), inside sales and bookkeeping.</p>

              <p>Together, they started Portland Welding Supply in the fall. Each contributed $25.00 in savings bonds, possibly received as bonuses after the war and received 35 shares of stock. The company started by Clarey, brought Roy in as a 40% owner, but soon realized Roy's value and offered to make it a 50/50 partnership.</p>

              <p>The fledgling business started on guts & prayers on the bottom floor of a cold, dark, damp building, known as the Hazen O. Hagar building. Vermin continued to occupy the building without a sublease.</p>

              <h4 className="text-xl font-bold mt-8 mb-4 text-pws-blue">Early Growth and Challenges</h4>
              
              <p>The early years were marked by determination and resourcefulness. Working in less-than-ideal conditions, the MacDonald brothers built their reputation through quality work and reliable service. Their experience from the shipyards proved invaluable as they understood the industrial needs of the region.</p>

              <p>Frank Tirabassi became their first employee in 1947, working part-time while serving as a Portland Police Patrolman. His dedication to both jobs exemplified the work ethic that would become synonymous with PWS.</p>

              <p>The move to the Quonset hut on Main Street in South Portland marked a significant milestone. Though modest, it represented the company's first real home and the beginning of their expansion beyond repair work into equipment sales and distribution.</p>

              <div className="mt-8 p-4 bg-pws-light-gray rounded-lg">
                <div className="flex items-center mb-2">
                  <Info className="w-5 h-5 text-pws-blue mr-2" />
                  <p className="text-sm text-pws-gray font-medium">Historical Document Excerpt</p>
                </div>
                <p className="text-sm text-pws-gray italic">
                  This represents the beginning of the complete historical document. The full text continues with detailed accounts of the company's growth through the decades, key employees, major contracts, technological advances, and the evolution from a small repair shop to a regional industry leader.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
