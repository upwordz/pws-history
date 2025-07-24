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
              <h4 className="text-xl font-bold mb-4 text-pws-blue">The Early Years (1932-1945)</h4>
              
              <p>LeRoy J (Roy) & Clarence R (Clarey or Mac) MacDonald were brought up in a two story wood frame home at 100 Granite Street in Quincy, Ma. They were two of three sons of Robert & Julie. Harold was the third.</p>

              <p>In 1932, Clarey Mac Donald (Mac) & Joe Martin Sr. were welders at the Lawley Shipyards in Neponset Mass. Bill Barron, a salesman for Air Reduction Co. calling on the welding dept. there, asked them if they'd have an interest in working for his company in South Boston. Joe & Mac started as welders the same day, along with Dorothy Cook, who later married Mac. Dot started as a sales mechanic clerk for Frank Mehaffey who was the regional sales manager.</p>

              <p>Chester Delbridge was vice president and Cliff Miller was the office manager. After only six months with the company, Joe Martin Sr. was offered a sales position covering part of Mass and Rhode Island. Mac was offered a sales position covering all northern New England.</p>

              <h4 className="text-xl font-bold mt-8 mb-4 text-pws-blue">The War Years (1940-1945)</h4>
              
              <p>In 1940, Mac left Airco to take a management position in South Portland at The New England Shipbuilding Corp. building liberty ships.</p>

              <p>In early 1942, Mac, who always watched out for his younger brother, Roy, convinced him & his wife Stella to leave the Shawmut Bank of Boston, where they were bookkeepers & move to 76 Fessenden St in Portland to join him at the shipyards. Before the war ended, Roy became a lead foreman with 8 men working for him. Mac became superintendent of the West Yard with 2,000 men working for him.</p>

              <h4 className="text-xl font-bold mt-8 mb-4 text-pws-blue">The Start of Portland Welding Supply (1945)</h4>
              
              <p>During the summer of 1945, Joe convinced Clarey to start his own welding repair and supply business. Clarey sold Roy on the idea and in August, Air Reduction Co agreed to give them the hardgoods distribution business. Mac gave up arc welding and started making sales calls and deliveries. Roy continued doing gas welding (he was known as an expert, the best in the area), inside sales and bookkeeping.</p>

              <p>Together, they started Portland Welding Supply in the fall. Each contributed $25.00 in savings bonds, possibly received as bonuses after the war and received 35 shares of stock. The company started by Clarey, brought Roy in as a 40% owner, but soon realized Roy's value and offered to make it a 50/50 partnership.</p>

              <p>The fledgling business started on guts & prayers on the bottom floor of a cold, dark, damp building, known as the Hazen O. Hagar building. Vermin continued to occupy the building without a sublease.</p>

              <h4 className="text-xl font-bold mt-8 mb-4 text-pws-blue">The Hagar Building Era (1945-1947)</h4>
              
              <p>Hazen O. Hagar owned two buildings on Forest Avenue in the 1940's. The Portland Welding Supply location was at 984 Forest Avenue, just after Walton Street on the left, heading toward Morrill's corner. It was purchased from Alec Nesbitt who ran a car and wagon painting business. The building was later burned to the ground by vandals after Mr. Hagar retired.</p>

              <p>During this period, the brothers faced significant challenges. The building was cold, dark, and damp, but their determination and the relationships Mac had built in the industry kept them afloat. Breaks came in the form of surplus war materials, including boxes of cutting tips that appeared used but were actually new, and 3,000 feet of surplus welding cable that Mac drove to Rhode Island to collect.</p>

              <h4 className="text-xl font-bold mt-8 mb-4 text-pws-blue">The Quonset Hut Years (1947-1954)</h4>
              
              <p>Frank Tirabassi was their first employee, hired part time in 1947 to do repairs while working as a Portland Police Patrolman. In late 1947, after some tough years on Forest Ave, they purchased a government surplus 20' x 36' Quonset hut and erected it on Bancroft & Martin land at 11 Main Street, So Portland, near the old Fore River Draw Bridge, rented from Ken Burr for the cost of taxes.</p>

              <p>The Quonset hut wasn't luxurious - it was cold and barren with a woefully inadequate propane heater that had to be started each morning and only warmed the place to about 55 degrees by mid afternoon on a winter's day. As you entered the small front room, there were two desks to the left with a door to a small repair area behind them. Inventory shelves were to the right and a larger unheated room used for welding was straight ahead.</p>

              <h4 className="text-xl font-bold mt-8 mb-4 text-pws-blue">Jim Whidden: The Game Changer (1948)</h4>
              
              <p>In mid 1948, Airco gave Mac & Roy the retail gas business, previously handled poorly by Bailey Auto Supply. They purchased their first GMC truck, and that's when Jim Whidden appeared on the scene, looking for a job. Lyndol Montgomery (Monty) from the South Portland plant had given Jim the job lead.</p>

              <p>Jim was told that a driver had already been hired, but he was unemployed and offered to work until the driver became available. Jim accepted $7 a day and worked a full week. After that week, he was called into their office and told he was more the kind of person they'd like to have working for them than the Air Reduction driver. He was offered $50 a week and told that if he worked out the way they thought he might, he'd have a chance to grow with the business. They were true to their word.</p>

              <p>Starting as a driver, Jim worked hard for Clarey & Roy for over 35 years, doing every task imaginable in a small firm - from cleaning floors to designing building additions, negotiating contracts with suppliers, purchasing, outside sales and management. The combination of Jim's winning smile, great personality & technical skills made him the best industry salesman in northern New England throughout the 60's & 70's.</p>

              <div className="mt-8 p-4 bg-pws-light-gray rounded-lg">
                <div className="flex items-center mb-2">
                  <Info className="w-5 h-5 text-pws-blue mr-2" />
                  <p className="text-sm text-pws-gray font-medium">Historical Document Source</p>
                </div>
                <p className="text-sm text-pws-gray italic">
                  Content extracted from "The History of Portland Welding Supply 1945-2008" - a comprehensive historical document spanning the company's first 63 years of operation, detailing the evolution from a $50 startup to a regional industry leader.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
