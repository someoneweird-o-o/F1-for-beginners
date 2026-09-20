export const DRIVERS = [
  // McLaren
  { id: '1', name: 'Lando Norris', team: 'McLaren', number: '4', country: 'United Kingdom', wins: 7, pod: 30, championships: 1, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png', bio: 'Defending World Champion leading McLaren into the 2026 regulation reset.' },
  { id: '2', name: 'Oscar Piastri', team: 'McLaren', number: '81', country: 'Australia', wins: 4, pod: 18, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png', bio: 'High-performing Australian driver forming one of the strongest pairings on the grid.' },

  // Scuderia Ferrari
  { id: '3', name: 'Lewis Hamilton', team: 'Scuderia Ferrari', number: '44', country: 'United Kingdom', wins: 105, pod: 201, championships: 7, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png', bio: 'Seven-time World Champion embarking on a historic career chapter with Ferrari.' },
  { id: '4', name: 'Charles Leclerc', team: 'Scuderia Ferrari', number: '16', country: 'Monaco', wins: 8, pod: 42, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png', bio: 'Maranello favorite fighting for world championship honors alongside Hamilton.' },

  // Red Bull Racing
  { id: '5', name: 'Max Verstappen', team: 'Red Bull Racing', number: '1', country: 'Netherlands', wins: 63, pod: 111, championships: 4, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png', bio: 'Four-time World Champion spearheading Red Bull in the new Ford engine era.' },
  { id: '6', name: 'Liam Lawson', team: 'Red Bull Racing', number: '30', country: 'New Zealand', wins: 0, pod: 1, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png', bio: 'Promoted to Red Bull main seat to partner Verstappen for 2026.' },

  // Mercedes-AMG
  { id: '7', name: 'George Russell', team: 'Mercedes-AMG', number: '63', country: 'United Kingdom', wins: 3, pod: 15, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png', bio: 'Team leader at Mercedes driving the active aero power unit transition.' },
  { id: '8', name: 'Kimi Antonelli', team: 'Mercedes-AMG', number: '12', country: 'Italy', wins: 0, pod: 2, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ANDANT01_Kimi_Antonelli/andant01.png', bio: 'Sensational Italian prodigy stepping into the Silver Arrows cockpit.' },

  // Aston Martin
  { id: '9', name: 'Fernando Alonso', team: 'Aston Martin', number: '14', country: 'Spain', wins: 32, pod: 106, championships: 2, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png', bio: 'Two-time World Champion leading Honda works partnership development.' },
  { id: '10', name: 'Lance Stroll', team: 'Aston Martin', number: '18', country: 'Canada', wins: 0, pod: 3, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png', bio: 'Experienced Canadian driver representing Aston Martin Silverstone.' },

  // Audi Factory F1
  { id: '11', name: 'Nico Hülkenberg', team: 'Audi Factory F1', number: '27', country: 'Germany', wins: 0, pod: 1, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png', bio: 'Veteran German driver headlining Audi’s official factory entry.' },
  { id: '12', name: 'Gabriel Bortoleto', team: 'Audi Factory F1', number: '5', country: 'Brazil', wins: 0, pod: 0, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png', bio: 'F2 Champion making his full Formula 1 debut with Audi.' },

  // Cadillac F1 Team
  { id: '13', name: 'Valtteri Bottas', team: 'Cadillac F1 Team', number: '77', country: 'Finland', wins: 10, pod: 67, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png', bio: '10-time race winner bringing veteran experience to the brand new American squad.' },
  { id: '14', name: 'Colton Herta', team: 'Cadillac F1 Team', number: '26', country: 'USA', wins: 0, pod: 0, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/COLHER01_Colton_Herta/colher01.png', bio: 'IndyCar star transitioning to Formula 1 with Cadillac General Motors.' },

  // Alpine F1
  { id: '15', name: 'Pierre Gasly', team: 'Alpine F1', number: '10', country: 'France', wins: 1, pod: 5, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png', bio: 'Race winner steering Alpine through its engine pivot to Mercedes power.' },
  { id: '16', name: 'Jack Doohan', team: 'Alpine F1', number: '7', country: 'Australia', wins: 0, pod: 0, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/J/JACDOO01_Jack_Doohan/jacdoo01.png', bio: 'Australian talent securing a permanent seat with Alpine.' },

  // Racing Bulls (VCARB)
  { id: '17', name: 'Yuki Tsunoda', team: 'Racing Bulls (VCARB)', number: '22', country: 'Japan', wins: 0, pod: 0, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png', bio: 'Dynamic Japanese driver continuing to spearhead VCARB.' },
  { id: '18', name: 'Isack Hadjar', team: 'Racing Bulls (VCARB)', number: '6', country: 'France', wins: 0, pod: 0, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png', bio: 'Red Bull junior graduate making his full-time F1 step.' },

  // Haas F1 Team
  { id: '19', name: 'Esteban Ocon', team: 'Haas F1 Team', number: '31', country: 'France', wins: 1, pod: 4, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png', bio: 'French race winner joining Haas to lead their multi-year push.' },
  { id: '20', name: 'Oliver Bearman', team: 'Haas F1 Team', number: '87', country: 'United Kingdom', wins: 0, pod: 0, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png', bio: 'Promising British Ferrari academy graduate driving full-time for Haas.' },

  // Williams Racing
  { id: '21', name: 'Alexander Albon', team: 'Williams Racing', number: '23', country: 'Thailand', wins: 0, pod: 2, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png', bio: 'Anchor driver leading Williams Racing back into podium contention.' },
  { id: '22', name: 'Carlos Sainz', team: 'Williams Racing', number: '55', country: 'Spain', wins: 4, pod: 25, championships: 0, image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png', bio: 'Four-time race winner bringing top-tier experience to Williams.' },
];

export const TEAMS = [
  { id: 'mclaren', name: 'McLaren', engine: 'Mercedes', base: 'Woking, UK', titles: '9', description: 'Reigning Constructors Champions entering the 2026 engine reset.', color: '#FF8000', tag: 'MCL' },
  { id: 'ferrari', name: 'Scuderia Ferrari', engine: 'Ferrari', base: 'Maranello, Italy', titles: '16', description: 'Iconic team featuring Lewis Hamilton and Charles Leclerc.', color: '#E8002D', tag: 'SF' },
  { id: 'redbull', name: 'Red Bull Racing', engine: 'Red Bull Ford', base: 'Milton Keynes, UK', titles: '6', description: 'Pioneering new engine partnership with Ford for 2026.', color: '#3671C6', tag: 'RBR' },
  { id: 'mercedes', name: 'Mercedes-AMG', engine: 'Mercedes', base: 'Brackley, UK', titles: '8', description: 'Silver Arrows aiming for top honors in active aero era.', color: '#27F4D2', tag: 'AMG' },
  { id: 'astonmartin', name: 'Aston Martin', engine: 'Honda Works', base: 'Silverstone, UK', titles: '0', description: 'Official Honda factory works partnership.', color: '#229971', tag: 'AMR' },
  { id: 'audi', name: 'Audi Factory F1', engine: 'Audi Power Unit', base: 'Hinwil, Switzerland', titles: '0', description: 'Complete entry into Formula 1 following full acquisition of Sauber.', color: '#F01A22', tag: 'AUD' },
  { id: 'cadillac', name: 'Cadillac F1 Team', engine: 'Ferrari / General Motors', base: 'Fishers, Indiana, USA', titles: '0', description: 'Newest team entering the grid for the 2026 season.', color: '#CDB87D', tag: 'CAD' },
  { id: 'alpine', name: 'Alpine F1', engine: 'Mercedes Power Unit', base: 'Enstone, UK', titles: '2', description: 'Transitioned to customer Mercedes power units for 2026.', color: '#0093CC', tag: 'ALP' },
  { id: 'vcarb', name: 'Racing Bulls (VCARB)', engine: 'Red Bull Ford', base: 'Faenza, Italy', titles: '0', description: 'Red Bull sister team utilizing shared technology and Ford power.', color: '#6692FF', tag: 'RB' },
  { id: 'haas', name: 'Haas F1 Team', engine: 'Ferrari', base: 'Kannapolis, USA', titles: '0', description: 'American team maintaining technical partnership with Ferrari.', color: '#B6BABD', tag: 'HAAS' },
  { id: 'williams', name: 'Williams Racing', engine: 'Mercedes', base: 'Grove, UK', titles: '9', description: 'Historic team building momentum under James Vowles leadership.', color: '#64C4FF', tag: 'WIL' },
];

export const CHAMPIONS = [
  { year: '2025', driver: 'Lando Norris', team: 'McLaren', wins: 7 },
  { year: '2024', driver: 'Max Verstappen', team: 'Red Bull Racing', wins: 9 },
  { year: '2023', driver: 'Max Verstappen', team: 'Red Bull Racing', wins: 19 },
  { year: '2022', driver: 'Max Verstappen', team: 'Red Bull Racing', wins: 15 },
  { year: '2021', driver: 'Max Verstappen', team: 'Red Bull Racing', wins: 10 },
  { year: '2020', driver: 'Lewis Hamilton', team: 'Mercedes', wins: 11 },
  { year: '2019', driver: 'Lewis Hamilton', team: 'Mercedes', wins: 11 },
  { year: '2018', driver: 'Lewis Hamilton', team: 'Mercedes', wins: 11 },
  { year: '2017', driver: 'Lewis Hamilton', team: 'Mercedes', wins: 9 },
  { year: '2016', driver: 'Nico Rosberg', team: 'Mercedes', wins: 9 },
  { year: '2015', driver: 'Lewis Hamilton', team: 'Mercedes', wins: 10 },
  { year: '2014', driver: 'Lewis Hamilton', team: 'Mercedes', wins: 11 },
  { year: '2013', driver: 'Sebastian Vettel', team: 'Red Bull Racing', wins: 13 },
  { year: '2012', driver: 'Sebastian Vettel', team: 'Red Bull Racing', wins: 5 },
  { year: '2011', driver: 'Sebastian Vettel', team: 'Red Bull Racing', wins: 11 },
  { year: '2010', driver: 'Sebastian Vettel', team: 'Red Bull Racing', wins: 5 },
  { year: '2009', driver: 'Jenson Button', team: 'Brawn GP', wins: 6 },
  { year: '2008', driver: 'Lewis Hamilton', team: 'McLaren', wins: 5 },
  { year: '2007', driver: 'Kimi Räikkönen', team: 'Ferrari', wins: 6 },
  { year: '2006', driver: 'Fernando Alonso', team: 'Renault', wins: 7 },
  { year: '2005', driver: 'Fernando Alonso', team: 'Renault', wins: 7 },
  { year: '2004', driver: 'Michael Schumacher', team: 'Ferrari', wins: 13 },
  { year: '2003', driver: 'Michael Schumacher', team: 'Ferrari', wins: 6 },
  { year: '2002', driver: 'Michael Schumacher', team: 'Ferrari', wins: 11 },
  { year: '2001', driver: 'Michael Schumacher', team: 'Ferrari', wins: 9 },
  { year: '2000', driver: 'Michael Schumacher', team: 'Ferrari', wins: 9 },
  { year: '1999', driver: 'Mika Häkkinen', team: 'McLaren', wins: 5 },
  { year: '1998', driver: 'Mika Häkkinen', team: 'McLaren', wins: 8 },
  { year: '1997', driver: 'Jacques Villeneuve', team: 'Williams', wins: 7 },
  { year: '1996', driver: 'Damon Hill', team: 'Williams', wins: 8 },
  { year: '1995', driver: 'Michael Schumacher', team: 'Benetton', wins: 9 },
  { year: '1994', driver: 'Michael Schumacher', team: 'Benetton', wins: 8 },
  { year: '1993', driver: 'Alain Prost', team: 'Williams', wins: 7 },
  { year: '1992', driver: 'Nigel Mansell', team: 'Williams', wins: 9 },
  { year: '1991', driver: 'Ayrton Senna', team: 'McLaren', wins: 7 },
  { year: '1990', driver: 'Ayrton Senna', team: 'McLaren', wins: 6 },
  { year: '1989', driver: 'Alain Prost', team: 'McLaren', wins: 4 },
  { year: '1988', driver: 'Ayrton Senna', team: 'McLaren', wins: 8 },
  { year: '1987', driver: 'Nelson Piquet', team: 'Williams', wins: 3 },
  { year: '1986', driver: 'Alain Prost', team: 'McLaren', wins: 4 },
  { year: '1985', driver: 'Alain Prost', team: 'McLaren', wins: 5 },
  { year: '1984', driver: 'Niki Lauda', team: 'McLaren', wins: 5 },
  { year: '1983', driver: 'Nelson Piquet', team: 'Brabham', wins: 3 },
  { year: '1982', driver: 'Keke Rosberg', team: 'Williams', wins: 1 },
  { year: '1981', driver: 'Nelson Piquet', team: 'Brabham', wins: 3 },
  { year: '1980', driver: 'Alan Jones', team: 'Williams', wins: 5 },
  { year: '1979', driver: 'Jody Scheckter', team: 'Ferrari', wins: 3 },
  { year: '1978', driver: 'Mario Andretti', team: 'Lotus', wins: 6 },
  { year: '1977', driver: 'Niki Lauda', team: 'Ferrari', wins: 3 },
  { year: '1976', driver: 'James Hunt', team: 'McLaren', wins: 6 },
  { year: '1975', driver: 'Niki Lauda', team: 'Ferrari', wins: 5 },
  { year: '1974', driver: 'Emerson Fittipaldi', team: 'McLaren', wins: 3 },
  { year: '1973', driver: 'Jackie Stewart', team: 'Tyrrell', wins: 5 },
  { year: '1972', driver: 'Emerson Fittipaldi', team: 'Lotus', wins: 5 },
  { year: '1971', driver: 'Jackie Stewart', team: 'Tyrrell', wins: 6 },
  { year: '1970', driver: 'Jochen Rindt', team: 'Lotus', wins: 5 },
  { year: '1969', driver: 'Jackie Stewart', team: 'Matra', wins: 6 },
  { year: '1968', driver: 'Graham Hill', team: 'Lotus', wins: 3 },
  { year: '1967', driver: 'Denny Hulme', team: 'Brabham', wins: 2 },
  { year: '1966', driver: 'Jack Brabham', team: 'Brabham', wins: 4 },
  { year: '1965', driver: 'Jim Clark', team: 'Lotus', wins: 6 },
  { year: '1964', driver: 'John Surtees', team: 'Ferrari', wins: 2 },
  { year: '1963', driver: 'Jim Clark', team: 'Lotus', wins: 7 },
  { year: '1962', driver: 'Graham Hill', team: 'BRM', wins: 4 },
  { year: '1961', driver: 'Phil Hill', team: 'Ferrari', wins: 2 },
  { year: '1960', driver: 'Jack Brabham', team: 'Cooper', wins: 5 },
  { year: '1959', driver: 'Jack Brabham', team: 'Cooper', wins: 2 },
  { year: '1958', driver: 'Mike Hawthorn', team: 'Ferrari', wins: 1 },
  { year: '1957', driver: 'Juan Manuel Fangio', team: 'Maserati', wins: 4 },
  { year: '1956', driver: 'Juan Manuel Fangio', team: 'Ferrari', wins: 3 },
  { year: '1955', driver: 'Juan Manuel Fangio', team: 'Mercedes', wins: 4 },
  { year: '1954', driver: 'Juan Manuel Fangio', team: 'Maserati / Mercedes', wins: 6 },
  { year: '1953', driver: 'Alberto Ascari', team: 'Ferrari', wins: 5 },
  { year: '1952', driver: 'Alberto Ascari', team: 'Ferrari', wins: 6 },
  { year: '1951', driver: 'Juan Manuel Fangio', team: 'Alfa Romeo', wins: 3 },
  { year: '1950', driver: 'Giuseppe Farina', team: 'Alfa Romeo', wins: 3 },
];

export const DICTIONARY = [
  // Basic On-Track Terminology
  { term: 'Apex', category: 'On Track', definition: 'The innermost point of a corner that a driver aims for to take the fastest and straightest path through a turn.' },
  { term: 'Clean Air vs. Dirty Air', category: 'On Track', definition: 'Clean air is undisturbed airflow experienced when driving in front without cars close ahead, giving optimal grip. Dirty air is the turbulent wake left behind a leading car, reducing aerodynamic grip for chasing cars.' },
  { term: 'Delta Time', category: 'On Track', definition: 'The physical time difference between two laps, or between a driver\'s current lap and a reference target lap.' },
  { term: 'G-force', category: 'On Track', definition: 'The physical gravitational load drivers feel on their bodies during acceleration, heavy braking, and fast cornering.' },
  { term: 'Lock-up', category: 'On Track', definition: 'Occurs when a driver brakes too hard and the brakes seize a wheel, causing the tyre to stop spinning and slide across the track surface.' },
  { term: 'Marbles', category: 'On Track', definition: 'Small pieces of rubber that tear off tyres during a race and accumulate outside the main racing line.' },
  { term: 'Oversteer vs. Understeer', category: 'On Track', definition: 'Oversteer is when the rear of the car slides out, making the car turn more than intended. Understeer is when the front wheels lose grip, causing the car to slide straight wide despite turning the wheel.' },
  { term: 'Sector', category: 'On Track', definition: 'The track is divided into three distinct segments (Sector 1, 2, and 3) to measure lap times and performance throughout different parts of a circuit.' },
  { term: 'Slipstream (Tow)', category: 'On Track', definition: 'Driving directly behind another car on a straight to reduce air resistance (drag), allowing the trailing car to gain extra top speed.' },

  // Aerodynamics & Car Components
  { term: 'Active Aero', category: 'Aero & Car', definition: 'Adjustable aerodynamic elements on the front and rear wings designed to balance cornering downforce with straight-line top speed.' },
  { term: 'Chassis / Monocoque', category: 'Aero & Car', definition: 'The central carbon-fiber safety structure and body frame of the car that protects the driver and supports the engine and suspension.' },
  { term: 'Cockpit', category: 'Aero & Car', definition: 'The central seating compartment where the driver sits, containing the steering wheel, harness, and survival cell controls.' },
  { term: 'Downforce', category: 'Aero & Car', definition: 'The downward aerodynamic pressure created by wings and underfloor airflow that presses the car into the track surface for high cornering grip.' },
  { term: 'Drag', category: 'Aero & Car', definition: 'The wind resistance generated by the car moving forward that slows straight-line top speed.' },
  { term: 'DRS (Drag Reduction System)', category: 'Aero & Car', definition: 'A driver-controlled system that opens a flap on the rear wing on designated straights to reduce drag and assist in overtaking.' },
  { term: 'Power Unit', category: 'Aero & Car', definition: 'The hybrid engine system combining a traditional internal combustion engine (ICE) with turbochargers and electric energy recovery units.' },
  { term: 'Telemetry', category: 'Aero & Car', definition: 'Real-time electronic data transmitted from sensors on the car directly to team engineers on the pit wall to monitor vehicle performance.' },

  // Race Weekend Format & Grid Setup
  { term: 'Backmarker', category: 'Weekend Format', definition: 'A driver running towards the rear of the field who is in danger of being lapped by the race leaders.' },
  { term: 'Formation Lap', category: 'Weekend Format', definition: 'The warm-up lap completed by all cars right before the race start to heat up tyres and brakes before taking their grid spots.' },
  { term: 'Grand Prix', category: 'Weekend Format', definition: 'The main individual F1 race event taking place over a race weekend.' },
  { term: 'Grid', category: 'Weekend Format', definition: 'The physical starting formation on the main straight where cars assemble in order based on qualifying results.' },
  { term: 'Parc Fermé', category: 'Weekend Format', definition: 'A restricted period starting during qualifying where teams are legally barred from making significant mechanical setup changes to the cars.' },
  { term: 'Pole Position', category: 'Weekend Format', definition: 'The top starting place at the front of the race grid awarded to the driver who sets the single fastest lap in qualifying.' },
  { term: 'Qualifying', category: 'Weekend Format', definition: 'Session held before the main race where drivers compete to set the fastest lap times to determine starting positions on the grid.' },
  { term: 'Sprint', category: 'Weekend Format', definition: 'A shortened, fast-paced race held on select race weekends that awards championship points and determines starting positions.' },

  // Tyres & Strategy
  { term: 'Compounds', category: 'Tyres & Strategy', definition: 'The different rubber formulations provided by the tyre manufacturer, ranging from Soft (fastest, wears quickly) to Hard (slower, lasts longer).' },
  { term: 'Degradation ("Deg")', category: 'Tyres & Strategy', definition: 'The progressive loss of tyre grip caused by thermal stress and mechanical wear over multiple laps.' },
  { term: 'Graining', category: 'Tyres & Strategy', definition: 'Thermal surface damage on a tyre where tiny rubber shreds peel off and stick to the tread, drastically lowering traction.' },
  { term: 'Intermediate / Full Wet Tyres', category: 'Tyres & Strategy', definition: 'Treaded tyres designed specifically to disperse standing water in light or heavy rainfall conditions.' },
  { term: 'In-Lap / Out-Lap', category: 'Tyres & Strategy', definition: 'The in-lap is the lap a driver enters the pit lane to change tyres. The out-lap is the lap spent exiting the pit lane back onto the track.' },
  { term: 'Overcut', category: 'Tyres & Strategy', definition: 'A pit strategy where a driver stays out on track longer than competitors to gain position when rivals hit traffic or struggle on fresh tyres.' },
  { term: 'Pit Stop', category: 'Tyres & Strategy', definition: 'A fast stop in the pit lane where crew members change all four tyres, usually taking under three seconds.' },
  { term: 'Stint', category: 'Tyres & Strategy', definition: 'The stretch of consecutive laps driven on a single set of tyres between pit stops.' },
  { term: 'Undercut', category: 'Tyres & Strategy', definition: 'A strategy where a driver makes an earlier pit stop than the car ahead to gain position by making use of fresh tyres on clear track.' },

  // Flags, Neutralizations & Officials
  { term: 'Black Flag', category: 'Flags & Officials', definition: 'Disqualification flag shown with a driver\'s car number requiring them to return to the pits immediately.' },
  { term: 'Blue Flag', category: 'Flags & Officials', definition: 'Shown to slower or lapped cars warning them to safely move aside and let faster lead-lap cars pass through.' },
  { term: 'Chequered Flag', category: 'Flags & Officials', definition: 'The famous black-and-white waved flag signaling the end of a session or race at the finish line.' },
  { term: 'Marshals', category: 'Flags & Officials', definition: 'Trackside safety personnel who wave warning flags, assist with broken-down cars, and clean up track debris.' },
  { term: 'Red Flag', category: 'Flags & Officials', definition: 'Issued during severe weather or dangerous accidents to halt the session immediately and bring all cars back to the pit lane.' },
  { term: 'Safety Car (SC)', category: 'Flags & Officials', definition: 'A physical safety vehicle deployed ahead of the leader to bundle up the field at controlled speeds after a serious accident.' },
  { term: 'Stewards', category: 'Flags & Officials', definition: 'Official race referees responsible for investigating on-track incidents, driver conduct, and technical infractions.' },
  { term: 'Virtual Safety Car (VSC)', category: 'Flags & Officials', definition: 'A digital neutralization method where drivers must reduce their speed to a precise target time on track without bringing out the physical Safety Car.' },
  { term: 'Yellow Flag', category: 'Flags & Officials', definition: 'Caution flag signaling hazards or stopped cars on or near the track; overtaking is strictly prohibited in yellow flag zones.' },

  // Common Broadcast & Team Radio Terms
  { term: 'Box, Box', category: 'Radio & Radio Terms', definition: 'The instruction sent over team radio telling the driver to enter the pit lane on that lap.' },
  { term: 'Lift and Coast', category: 'Radio & Radio Terms', definition: 'A fuel and brake management technique where the driver releases the throttle early before hitting the brake pedal into a turn.' },
  { term: 'Push, Push', category: 'Radio & Radio Terms', definition: 'Direct instruction from engineers telling the driver to drive at maximum absolute pace without conserving tyres or fuel.' },
  { term: 'Track Limits', category: 'Radio & Radio Terms', definition: 'The painted white lines defining the legal boundary of the circuit; drivers receive penalties if all four wheels cross them repeatedly.' }
];