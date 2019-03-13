let { ObjectID } = require('mongodb');

const occupations = [
	{
		_id: ObjectID('5c4247738e548b003f1b9443'),
		locale: 'en-US',
		name: 'Career',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9444'),
		locale: 'en-US',
		name: 'Account Collector',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9445'),
		locale: 'en-US',
		name: 'Accountant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9446'),
		locale: 'en-US',
		name: 'Accounting Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9447'),
		locale: 'en-US',
		name: 'Actor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9448'),
		locale: 'en-US',
		name: 'Actuary',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9449'),
		locale: 'en-US',
		name: 'Administrative Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b944a'),
		locale: 'en-US',
		name: 'Administrative Services Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b944b'),
		locale: 'en-US',
		name: 'Adult Literacy Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b944c'),
		locale: 'en-US',
		name: 'Advertising Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b944d'),
		locale: 'en-US',
		name: 'Advertising Sales Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b944e'),
		locale: 'en-US',
		name: 'Aerospace Engineering and Operations Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b944f'),
		locale: 'en-US',
		name: 'Aerospace Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9450'),
		locale: 'en-US',
		name: 'Agent and Business Manager of Artists, Performers, and Athletes',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9451'),
		locale: 'en-US',
		name: 'Agricultural Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9452'),
		locale: 'en-US',
		name: 'Agricultural Inspector',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9453'),
		locale: 'en-US',
		name: 'Agricultural Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9454'),
		locale: 'en-US',
		name: 'Agricultural Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9455'),
		locale: 'en-US',
		name: 'Agricultural Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9456'),
		locale: 'en-US',
		name: 'Agricultural Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9457'),
		locale: 'en-US',
		name: 'Air Conditioning and Heating Mechanic and Installer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9458'),
		locale: 'en-US',
		name: 'Air Traffic Controller',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9459'),
		locale: 'en-US',
		name: 'Aircraft Cargo Handling Supervisor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b945a'),
		locale: 'en-US',
		name: 'Aircraft Equipment Mechanic and Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b945b'),
		locale: 'en-US',
		name: 'Airfield Operations Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b945c'),
		locale: 'en-US',
		name: 'Airline and Commercial Pilot',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b945d'),
		locale: 'en-US',
		name: 'Ambulance Dispatcher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b945e'),
		locale: 'en-US',
		name: 'Ambulance Driver and Attendant (Except Emergency Medical Technician)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b945f'),
		locale: 'en-US',
		name: 'Amusement and Recreation Attendant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9460'),
		locale: 'en-US',
		name: 'Animal Care and Service Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9461'),
		locale: 'en-US',
		name: 'Animal Control Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9462'),
		locale: 'en-US',
		name: 'Announcer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9463'),
		locale: 'en-US',
		name: 'Anthropologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9464'),
		locale: 'en-US',
		name: 'Appraiser and Assessor of Real Estate',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9465'),
		locale: 'en-US',
		name: 'Arbitrator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9466'),
		locale: 'en-US',
		name: 'Archeologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9467'),
		locale: 'en-US',
		name: 'Architect',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9468'),
		locale: 'en-US',
		name: 'Architectural Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9469'),
		locale: 'en-US',
		name: 'Archivist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b946a'),
		locale: 'en-US',
		name: 'Art Director',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b946b'),
		locale: 'en-US',
		name: 'Assembler',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b946c'),
		locale: 'en-US',
		name: 'Astronomer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b946d'),
		locale: 'en-US',
		name: 'Athlete and Sports Competitor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b946e'),
		locale: 'en-US',
		name: 'Athletic Trainer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b946f'),
		locale: 'en-US',
		name: 'Atmospheric Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9470'),
		locale: 'en-US',
		name: 'Attorney',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9471'),
		locale: 'en-US',
		name: 'Avionics Equipment Mechanic and Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9472'),
		locale: 'en-US',
		name: 'Audio and Video Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9473'),
		locale: 'en-US',
		name: 'Audiologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9474'),
		locale: 'en-US',
		name: 'Auditing Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9475'),
		locale: 'en-US',
		name: 'Auditor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9476'),
		locale: 'en-US',
		name: 'Author',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9477'),
		locale: 'en-US',
		name: 'Automated Teller Machine (ATM) Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9478'),
		locale: 'en-US',
		name: 'Automotive and Watercraft Service Attendant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9479'),
		locale: 'en-US',
		name: 'Automotive Body and Glass Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b947a'),
		locale: 'en-US',
		name: 'Automotive Service Technician and Mechanic',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b947b'),
		locale: 'en-US',
		name: 'Baggage Porter and Bellhop',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b947c'),
		locale: 'en-US',
		name: 'Bailiff',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b947d'),
		locale: 'en-US',
		name: 'Baker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b947e'),
		locale: 'en-US',
		name: 'Barber',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b947f'),
		locale: 'en-US',
		name: 'Bartender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9480'),
		locale: 'en-US',
		name: 'Behavioral Disorder Counselor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9481'),
		locale: 'en-US',
		name: 'Benefits Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9482'),
		locale: 'en-US',
		name: 'Bicycle Mechanic',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9483'),
		locale: 'en-US',
		name: 'Bill Collector',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9484'),
		locale: 'en-US',
		name: 'Biochemist and Biophysicist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9485'),
		locale: 'en-US',
		name: 'Biological Scientist (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9486'),
		locale: 'en-US',
		name: 'Biological Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9487'),
		locale: 'en-US',
		name: 'Biomedical Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9488'),
		locale: 'en-US',
		name: 'Blockmason',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9489'),
		locale: 'en-US',
		name: 'Boiler Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b948a'),
		locale: 'en-US',
		name: 'Boilermaker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b948b'),
		locale: 'en-US',
		name: 'Bookkeeping Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b948c'),
		locale: 'en-US',
		name: 'Brazer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b948d'),
		locale: 'en-US',
		name: 'Brickmason',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b948e'),
		locale: 'en-US',
		name: 'Bridge and Lock Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b948f'),
		locale: 'en-US',
		name: 'Broadcast Engineering Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9490'),
		locale: 'en-US',
		name: 'Budget Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9491'),
		locale: 'en-US',
		name: 'Building Cleaner',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9492'),
		locale: 'en-US',
		name: 'Building Cleaning Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9493'),
		locale: 'en-US',
		name: 'Building Inspector',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9494'),
		locale: 'en-US',
		name: 'Bus Driver',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9495'),
		locale: 'en-US',
		name: 'Business Operations Specialist (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9496'),
		locale: 'en-US',
		name: 'Butcher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9497'),
		locale: 'en-US',
		name: 'Buyer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9498'),
		locale: 'en-US',
		name: 'Camera and Photographic Equipment Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b9499'),
		locale: 'en-US',
		name: 'Camera Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b949a'),
		locale: 'en-US',
		name: 'Cardiovascular Technologist and Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b949b'),
		locale: 'en-US',
		name: 'Career Counselor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b949c'),
		locale: 'en-US',
		name: 'Career and Technical Education Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b949d'),
		locale: 'en-US',
		name: 'Cargo and Freight Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b949e'),
		locale: 'en-US',
		name: 'Carpenter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b949f'),
		locale: 'en-US',
		name: 'Carpet Installer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a0'),
		locale: 'en-US',
		name: 'Cartographer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a1'),
		locale: 'en-US',
		name: 'Cashier',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a2'),
		locale: 'en-US',
		name: 'Ceiling Tile Installer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a3'),
		locale: 'en-US',
		name: 'Cement Mason',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a4'),
		locale: 'en-US',
		name: 'Chauffeur',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a5'),
		locale: 'en-US',
		name: 'Chef',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a6'),
		locale: 'en-US',
		name: 'Chemical Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a7'),
		locale: 'en-US',
		name: 'Chemical Plant and System Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a8'),
		locale: 'en-US',
		name: 'Chemical Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94a9'),
		locale: 'en-US',
		name: 'Chemist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94aa'),
		locale: 'en-US',
		name: 'Childcare Center Director',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94ab'),
		locale: 'en-US',
		name: 'Childcare Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94ac'),
		locale: 'en-US',
		name: 'Chiropractor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94ad'),
		locale: 'en-US',
		name: 'Choreographer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94ae'),
		locale: 'en-US',
		name: 'Civil Engineering Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94af'),
		locale: 'en-US',
		name: 'Civil Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b0'),
		locale: 'en-US',
		name: 'Claims Adjuster, Appraiser, Examiner, and Investigator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b1'),
		locale: 'en-US',
		name: 'Clergy',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b2'),
		locale: 'en-US',
		name: 'Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b3'),
		locale: 'en-US',
		name: 'Bookkeeping, Accounting, and Auditing Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b4'),
		locale: 'en-US',
		name: 'Counter and Rental Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b5'),
		locale: 'en-US',
		name: 'Financial Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b6'),
		locale: 'en-US',
		name: 'General Office Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b7'),
		locale: 'en-US',
		name: 'Information Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b8'),
		locale: 'en-US',
		name: 'Mail Clerk and Mail Machine Operator (Except Postal Service)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94b9'),
		locale: 'en-US',
		name: 'Material Recording Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94ba'),
		locale: 'en-US',
		name: 'Clinical Laboratory Technologist and Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94bb'),
		locale: 'en-US',
		name: 'Coach and Scout',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94bc'),
		locale: 'en-US',
		name: 'Coating Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94bd'),
		locale: 'en-US',
		name: 'Commercial Designer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94be'),
		locale: 'en-US',
		name: 'Commercial Diver',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94bf'),
		locale: 'en-US',
		name: 'Commodities Sales Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c0'),
		locale: 'en-US',
		name: 'Communications Equipment Operator (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c1'),
		locale: 'en-US',
		name: 'Community and Social Service Specialist (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c2'),
		locale: 'en-US',
		name: 'Community Association Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c3'),
		locale: 'en-US',
		name: 'Community Health Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c4'),
		locale: 'en-US',
		name: 'Community Service Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c5'),
		locale: 'en-US',
		name: 'Compensation, Benefits, and Job Analysis Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c6'),
		locale: 'en-US',
		name: 'Compensation and Benefits Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c7'),
		locale: 'en-US',
		name: 'Compliance Officer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c8'),
		locale: 'en-US',
		name: 'Composer - Music',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: ObjectID('5c4247738e548b003f1b94c9'),
		locale: 'en-US',
		name: 'Computer Control Programmer and Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94ca'),
		locale: 'en-US',
		name: 'Computer Hardware Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94cb'),
		locale: 'en-US',
		name: 'Computer Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94cc'),
		locale: 'en-US',
		name: 'Computer Network Architect',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94cd'),
		locale: 'en-US',
		name: 'Computer Occupations (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94ce'),
		locale: 'en-US',
		name: 'Computer Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94cf'),
		locale: 'en-US',
		name: 'Computer Programmer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d0'),
		locale: 'en-US',
		name: 'Computer Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d1'),
		locale: 'en-US',
		name: 'Computer Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d2'),
		locale: 'en-US',
		name: 'Computer Software Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d3'),
		locale: 'en-US',
		name: 'Computer Support Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d4'),
		locale: 'en-US',
		name: 'Computer Systems Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d5'),
		locale: 'en-US',
		name: 'Computer Systems Administrator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d6'),
		locale: 'en-US',
		name: 'Concierge',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d7'),
		locale: 'en-US',
		name: 'Conciliator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d8'),
		locale: 'en-US',
		name: 'Conservation Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94d9'),
		locale: 'en-US',
		name: 'Conservation Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94da'),
		locale: 'en-US',
		name: 'Construction and Related Workers (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94db'),
		locale: 'en-US',
		name: 'Construction Equipment Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94dc'),
		locale: 'en-US',
		name: 'Construction Inspector',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94dd'),
		locale: 'en-US',
		name: 'Construction Laborer and Helper',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94de'),
		locale: 'en-US',
		name: 'Construction Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94df'),
		locale: 'en-US',
		name: 'Continuous Mining Machine Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e0'),
		locale: 'en-US',
		name: 'Control and Valve Installer and Repairer (Except Mechanical Door)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e1'),
		locale: 'en-US',
		name: 'Cook',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e2'),
		locale: 'en-US',
		name: 'Correctional Officer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e3'),
		locale: 'en-US',
		name: 'Correctional Treatment Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e4'),
		locale: 'en-US',
		name: 'Correspondent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e5'),
		locale: 'en-US',
		name: 'Cosmetologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e6'),
		locale: 'en-US',
		name: 'Cost Estimator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e7'),
		locale: 'en-US',
		name: 'Costume Attendant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e8'),
		locale: 'en-US',
		name: 'Counselor (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94e9'),
		locale: 'en-US',
		name: 'Counter and Rental Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94ea'),
		locale: 'en-US',
		name: 'Couriers and Messenger',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94eb'),
		locale: 'en-US',
		name: 'Court Reporter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94ec'),
		locale: 'en-US',
		name: 'Craft Artist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94ed'),
		locale: 'en-US',
		name: 'Credit Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94ee'),
		locale: 'en-US',
		name: 'Credit Counselor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94ef'),
		locale: 'en-US',
		name: 'Crossing Guard',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f0'),
		locale: 'en-US',
		name: 'Curator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f1'),
		locale: 'en-US',
		name: 'Customer Service Representative',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f2'),
		locale: 'en-US',
		name: 'Cutter and Trimmer (Hand)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f3'),
		locale: 'en-US',
		name: 'Dancer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f4'),
		locale: 'en-US',
		name: 'Data Entry Keyer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f5'),
		locale: 'en-US',
		name: 'Database Administrator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f6'),
		locale: 'en-US',
		name: 'Delivery Truck Driver',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f7'),
		locale: 'en-US',
		name: 'Demonstrator and Product Promoter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f8'),
		locale: 'en-US',
		name: 'Dental Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94f9'),
		locale: 'en-US',
		name: 'Dental Hygienist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94fa'),
		locale: 'en-US',
		name: 'Dental Laboratory Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94fb'),
		locale: 'en-US',
		name: 'Dentist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94fc'),
		locale: 'en-US',
		name: 'Derrick Operator (Oil and Gas)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94fd'),
		locale: 'en-US',
		name: 'Designer (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94fe'),
		locale: 'en-US',
		name: 'Desktop Publisher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b94ff'),
		locale: 'en-US',
		name: 'Development Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9500'),
		locale: 'en-US',
		name: 'Diagnostic Medical Sonographer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9501'),
		locale: 'en-US',
		name: 'Diesel Service Technician and Mechanic',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9502'),
		locale: 'en-US',
		name: 'Dietitian',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9503'),
		locale: 'en-US',
		name: 'Director - Music',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9504'),
		locale: 'en-US',
		name: 'Director - Film, Theater',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9505'),
		locale: 'en-US',
		name: 'Dishwasher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9506'),
		locale: 'en-US',
		name: 'Dispatcher (Police, Fire, and Ambulance)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9507'),
		locale: 'en-US',
		name: 'Dispatcher (Except Police, Fire, and Ambulance)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9508'),
		locale: 'en-US',
		name: 'Doctor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9509'),
		locale: 'en-US',
		name: 'Door-to-Door Sales',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b950a'),
		locale: 'en-US',
		name: 'Drafter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b950b'),
		locale: 'en-US',
		name: 'Drywall Installer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b950c'),
		locale: 'en-US',
		name: 'Earth Driller (Except Oil and Gas)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b950d'),
		locale: 'en-US',
		name: 'Economist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b950e'),
		locale: 'en-US',
		name: 'Editor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b950f'),
		locale: 'en-US',
		name: 'Education Administrator - Postsecondary',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9510'),
		locale: 'en-US',
		name: 'Education Administrator - Elementary, Middle, and High School',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9511'),
		locale: 'en-US',
		name: 'Education Administrator (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9512'),
		locale: 'en-US',
		name: 'Education, Training, and Library Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9513'),
		locale: 'en-US',
		name: 'Electrical and Electronics Engineering Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9514'),
		locale: 'en-US',
		name: 'Electrical Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9515'),
		locale: 'en-US',
		name: 'Electrical and Electronics Installers and Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9516'),
		locale: 'en-US',
		name: 'Electrician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9517'),
		locale: 'en-US',
		name: 'Electro-mechanical Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9518'),
		locale: 'en-US',
		name: 'Electronic Home Entertainment Equipment Installer and Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9519'),
		locale: 'en-US',
		name: 'Elementary School Principal',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b951a'),
		locale: 'en-US',
		name: 'Elementary School Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b951b'),
		locale: 'en-US',
		name: 'Elevator Installer and Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b951c'),
		locale: 'en-US',
		name: 'Embalmer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b951d'),
		locale: 'en-US',
		name: 'Emergency Management Director',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b951e'),
		locale: 'en-US',
		name: 'Emergency Medical Technician (EMT)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b951f'),
		locale: 'en-US',
		name: 'Emergency Response Dispatcher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9520'),
		locale: 'en-US',
		name: 'Engineering Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9521'),
		locale: 'en-US',
		name: 'Engineering Technician, except Drafters (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9522'),
		locale: 'en-US',
		name: 'Engineer (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9523'),
		locale: 'en-US',
		name: 'Entertainer and Performer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9524'),
		locale: 'en-US',
		name: 'Entertainment Attendant and Related Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9525'),
		locale: 'en-US',
		name: 'Environmental Engineering Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9526'),
		locale: 'en-US',
		name: 'Environmental Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9527'),
		locale: 'en-US',
		name: 'Environmental Science and Protection Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9528'),
		locale: 'en-US',
		name: 'Environmental Scientist and Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9529'),
		locale: 'en-US',
		name: 'Epidemiologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b952a'),
		locale: 'en-US',
		name: 'Etcher and Engraver',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b952b'),
		locale: 'en-US',
		name: 'Exercise Physiologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b952c'),
		locale: 'en-US',
		name: 'Explosives Worker, Ordnance Handling Expert, and Blaster',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b952d'),
		locale: 'en-US',
		name: 'Extraction Worker Helper',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b952e'),
		locale: 'en-US',
		name: 'Extraction Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b952f'),
		locale: 'en-US',
		name: 'Fabric and Apparel Patternmaker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9530'),
		locale: 'en-US',
		name: 'Fabric Mender (Except Garment)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9531'),
		locale: 'en-US',
		name: 'Fabricator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9532'),
		locale: 'en-US',
		name: 'Family Therapist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9533'),
		locale: 'en-US',
		name: 'Farm Labor Contractor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9534'),
		locale: 'en-US',
		name: 'Farmer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9535'),
		locale: 'en-US',
		name: 'Fashion Designer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9536'),
		locale: 'en-US',
		name: 'Fence Erector',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9537'),
		locale: 'en-US',
		name: 'Film Editor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9538'),
		locale: 'en-US',
		name: 'Financial Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9539'),
		locale: 'en-US',
		name: 'Financial Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b953a'),
		locale: 'en-US',
		name: 'Financial Clerk (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b953b'),
		locale: 'en-US',
		name: 'Financial Examiner',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b953c'),
		locale: 'en-US',
		name: 'Financial Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b953d'),
		locale: 'en-US',
		name: 'Financial Services Sales Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b953e'),
		locale: 'en-US',
		name: 'Financial Specialist (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b953f'),
		locale: 'en-US',
		name: 'Fine Artist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9540'),
		locale: 'en-US',
		name: 'Fire Inspector and Investigator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9541'),
		locale: 'en-US',
		name: 'Firefighter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9542'),
		locale: 'en-US',
		name: 'News and Street Vendor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9543'),
		locale: 'en-US',
		name: 'Construction Trades and Extraction Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9544'),
		locale: 'en-US',
		name: 'Correctional Officer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9545'),
		locale: 'en-US',
		name: 'Farming, Fishing, and Forestry Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9546'),
		locale: 'en-US',
		name: 'Fire Fighting and Prevention Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9547'),
		locale: 'en-US',
		name: 'Food Preparation and Serving Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9548'),
		locale: 'en-US',
		name: 'Helper, Laborer, and Material Mover',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9549'),
		locale: 'en-US',
		name: 'Housekeeping and Janitorial Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b954a'),
		locale: 'en-US',
		name: 'Landscaping, Lawn Service, and Groundskeeping Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b954b'),
		locale: 'en-US',
		name: 'Mechanic, Installer, and Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b954c'),
		locale: 'en-US',
		name: 'Nonretail Sales Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b954d'),
		locale: 'en-US',
		name: 'Office and Administrative Support Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b954e'),
		locale: 'en-US',
		name: 'Personal Service Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b954f'),
		locale: 'en-US',
		name: 'Police and Detective',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9550'),
		locale: 'en-US',
		name: 'Production and Operating Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9551'),
		locale: 'en-US',
		name: 'Protective Service Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9552'),
		locale: 'en-US',
		name: 'Retail Sales Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9553'),
		locale: 'en-US',
		name: 'Transportation and Material-Moving Machine and Vehicle Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9554'),
		locale: 'en-US',
		name: 'Fishing Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9555'),
		locale: 'en-US',
		name: 'Fitness Trainer and Instructor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9556'),
		locale: 'en-US',
		name: 'Flight Attendant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9557'),
		locale: 'en-US',
		name: 'Flight Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9558'),
		locale: 'en-US',
		name: 'Floor Layer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9559'),
		locale: 'en-US',
		name: 'Floor Sander and Finisher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b955a'),
		locale: 'en-US',
		name: 'Floral Designer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b955b'),
		locale: 'en-US',
		name: 'Food and Beverage Serving and Related Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b955c'),
		locale: 'en-US',
		name: 'Food Preparation Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b955d'),
		locale: 'en-US',
		name: 'Food Processing Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b955e'),
		locale: 'en-US',
		name: 'Food Science Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b955f'),
		locale: 'en-US',
		name: 'Food Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9560'),
		locale: 'en-US',
		name: 'Food Service Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9561'),
		locale: 'en-US',
		name: 'Forensic Science Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9562'),
		locale: 'en-US',
		name: 'Forest and Conservation Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9563'),
		locale: 'en-US',
		name: 'Forest and Conservation Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9564'),
		locale: 'en-US',
		name: 'Forest Fire Inspector and Prevention Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9565'),
		locale: 'en-US',
		name: 'Forester',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9566'),
		locale: 'en-US',
		name: 'Fundraiser',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9567'),
		locale: 'en-US',
		name: 'Fundraising Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9568'),
		locale: 'en-US',
		name: 'Funeral Attendant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9569'),
		locale: 'en-US',
		name: 'Funeral Service Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b956a'),
		locale: 'en-US',
		name: 'G.E.D. Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b956b'),
		locale: 'en-US',
		name: 'Gaming Change Person and Booth Cashier',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b956c'),
		locale: 'en-US',
		name: 'Gaming Services Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b956d'),
		locale: 'en-US',
		name: 'Gaming Surveillance Officer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b956e'),
		locale: 'en-US',
		name: 'Gas Compressor and Gas Pumping Station Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b956f'),
		locale: 'en-US',
		name: 'Gas Plant Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9570'),
		locale: 'en-US',
		name: 'General Maintenance and Repair Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9571'),
		locale: 'en-US',
		name: 'General Office Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9572'),
		locale: 'en-US',
		name: 'Genetic Counselor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9573'),
		locale: 'en-US',
		name: 'Geographer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9574'),
		locale: 'en-US',
		name: 'Geological Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9575'),
		locale: 'en-US',
		name: 'Geological Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9576'),
		locale: 'en-US',
		name: 'Geoscientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9577'),
		locale: 'en-US',
		name: 'Glazier',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9578'),
		locale: 'en-US',
		name: 'Grader and Sorter (Agricultural Products)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9579'),
		locale: 'en-US',
		name: 'Graduate Teaching Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b957a'),
		locale: 'en-US',
		name: 'Graphic Designer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b957b'),
		locale: 'en-US',
		name: 'Grinding and Polishing Worker (Hand)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b957c'),
		locale: 'en-US',
		name: 'Grounds Maintenance Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b957d'),
		locale: 'en-US',
		name: 'Hairstylist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b957e'),
		locale: 'en-US',
		name: 'Hand Laborer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b957f'),
		locale: 'en-US',
		name: 'Hazardous Materials Removal Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9580'),
		locale: 'en-US',
		name: 'Head Cook',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9581'),
		locale: 'en-US',
		name: 'Health and Safety Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9582'),
		locale: 'en-US',
		name: 'Health Diagnosing and Treating Practitioner (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9583'),
		locale: 'en-US',
		name: 'Health Educators and Community Health Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9584'),
		locale: 'en-US',
		name: 'Health Information Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9585'),
		locale: 'en-US',
		name: 'Health Services Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9586'),
		locale: 'en-US',
		name: 'Health Technologist and Technician (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9587'),
		locale: 'en-US',
		name: 'Healthcare Practitioner and Technical Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9588'),
		locale: 'en-US',
		name: 'Healthcare Support Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9589'),
		locale: 'en-US',
		name: 'Hearing Officer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b958a'),
		locale: 'en-US',
		name: 'Heating and Air Conditioning Mechanic and Installer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b958b'),
		locale: 'en-US',
		name: 'Heavy and Tractor-trailer Truck Driver',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b958c'),
		locale: 'en-US',
		name: 'Heavy Vehicle Service Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b958d'),
		locale: 'en-US',
		name: 'High School Equivalency Diploma Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b958e'),
		locale: 'en-US',
		name: 'High School Principal',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b958f'),
		locale: 'en-US',
		name: 'High School Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9590'),
		locale: 'en-US',
		name: 'Highway Maintenance Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9591'),
		locale: 'en-US',
		name: 'Historian',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9592'),
		locale: 'en-US',
		name: 'Home Appliance Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9593'),
		locale: 'en-US',
		name: 'Home Health Aide',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9594'),
		locale: 'en-US',
		name: 'Hotel Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9595'),
		locale: 'en-US',
		name: 'Housekeeping Cleaner',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9596'),
		locale: 'en-US',
		name: 'Human Resources Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9597'),
		locale: 'en-US',
		name: 'Human Resources Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9598'),
		locale: 'en-US',
		name: 'Human Service Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9599'),
		locale: 'en-US',
		name: 'Hunting Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b959a'),
		locale: 'en-US',
		name: 'Hydrologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b959b'),
		locale: 'en-US',
		name: 'Industrial Designer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b959c'),
		locale: 'en-US',
		name: 'Industrial Engineering Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b959d'),
		locale: 'en-US',
		name: 'Industrial Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b959e'),
		locale: 'en-US',
		name: 'Industrial Machinery Mechanic and Maintenance Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b959f'),
		locale: 'en-US',
		name: 'Industrial Production Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a0'),
		locale: 'en-US',
		name: 'Information Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a1'),
		locale: 'en-US',
		name: 'Information Research Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a2'),
		locale: 'en-US',
		name: 'Information Security Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a3'),
		locale: 'en-US',
		name: 'Information Systems Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a4'),
		locale: 'en-US',
		name: 'Inspector, Tester, Sorter, Sampler, and Weigher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a5'),
		locale: 'en-US',
		name: 'Installation, Maintenance, and Repair Worker Helper',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a6'),
		locale: 'en-US',
		name: 'Installation, Maintenance, and Repair Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a7'),
		locale: 'en-US',
		name: 'Instructional Coordinator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a8'),
		locale: 'en-US',
		name: 'Insulation Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95a9'),
		locale: 'en-US',
		name: 'Insurance Sales Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95aa'),
		locale: 'en-US',
		name: 'Insurance Underwriter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ab'),
		locale: 'en-US',
		name: 'Interior Designer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ac'),
		locale: 'en-US',
		name: 'Interpreter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ad'),
		locale: 'en-US',
		name: 'Iron Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ae'),
		locale: 'en-US',
		name: 'Janitor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95af'),
		locale: 'en-US',
		name: 'Jeweler',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b0'),
		locale: 'en-US',
		name: 'Job Analysis Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b1'),
		locale: 'en-US',
		name: 'Journalist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b2'),
		locale: 'en-US',
		name: 'Judge',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b3'),
		locale: 'en-US',
		name: 'Kindergarten Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b4'),
		locale: 'en-US',
		name: 'Labor Relations Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b5'),
		locale: 'en-US',
		name: 'Landscape Architect',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b6'),
		locale: 'en-US',
		name: 'Lawyer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b7'),
		locale: 'en-US',
		name: 'Layout Worker (Metal and Plastic)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b8'),
		locale: 'en-US',
		name: 'Legal Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95b9'),
		locale: 'en-US',
		name: 'Legal Support Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ba'),
		locale: 'en-US',
		name: 'Legislator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95bb'),
		locale: 'en-US',
		name: 'Librarian',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95bc'),
		locale: 'en-US',
		name: 'Library Technician and Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95bd'),
		locale: 'en-US',
		name: 'Licensed Practical and Licensed Vocational Nurse',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95be'),
		locale: 'en-US',
		name: 'Life Scientist (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95bf'),
		locale: 'en-US',
		name: 'Life, Physical, and Social Science Technician (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c0'),
		locale: 'en-US',
		name: 'Lifeguard and Other Recreational Protective Service Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c1'),
		locale: 'en-US',
		name: 'Line Installer and Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c2'),
		locale: 'en-US',
		name: 'Loan Officer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c3'),
		locale: 'en-US',
		name: 'Locker Room, Coatroom, and Dressing Room Attendant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c4'),
		locale: 'en-US',
		name: 'Locksmith and Safe Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c5'),
		locale: 'en-US',
		name: 'Lodging Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c6'),
		locale: 'en-US',
		name: 'Logging Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c7'),
		locale: 'en-US',
		name: 'Logistician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c8'),
		locale: 'en-US',
		name: 'Machine and Equipment Setter, Operator and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95c9'),
		locale: 'en-US',
		name: 'Adhesive Bonding Machine Operator and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ca'),
		locale: 'en-US',
		name: 'Chemical Equipment Operator and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95cb'),
		locale: 'en-US',
		name: 'Cleaning, Washing, and Metal Pickling Equipment Operator and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95cc'),
		locale: 'en-US',
		name: 'Cooling and Freezing Equipment Operator and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95cd'),
		locale: 'en-US',
		name: 'Crushing, Grinding, and Polishing Machine Setter, Operator, and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ce'),
		locale: 'en-US',
		name: 'Cutting and Slicing Machine Setter, Operator, and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95cf'),
		locale: 'en-US',
		name: 'Extruding and Forming Machine Setter, Operator, and Tender (Synthetic and Glass Fibers)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d0'),
		locale: 'en-US',
		name: 'Extruding, Forming, Pressing, and Compacting Machine Setter, Operator, and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d1'),
		locale: 'en-US',
		name: 'Furnace, Kiln, Oven, Drier, and Kettle Operator and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d2'),
		locale: 'en-US',
		name: 'Mixing and Blending Machine Setter, Operator, and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d3'),
		locale: 'en-US',
		name: 'Packaging and Filling Machine Operator and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d4'),
		locale: 'en-US',
		name: 'Paper Goods Machine Setter, Operator, and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d5'),
		locale: 'en-US',
		name: 'Photographic Process Worker and Processing Machine Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d6'),
		locale: 'en-US',
		name: 'Separating, Filtering, Clarifying, Precipitating, and Still Machine Setter, Operator, and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d7'),
		locale: 'en-US',
		name: 'Sewing Machine Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d8'),
		locale: 'en-US',
		name: 'Shoe Machine Operator and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95d9'),
		locale: 'en-US',
		name: 'Textile Bleaching and Dyeing Machine Operator and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95da'),
		locale: 'en-US',
		name: 'Textile Cutting Machine Setter, Operator, and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95db'),
		locale: 'en-US',
		name: 'Textile Knitting and Weaving Machine Setter, Operator, and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95dc'),
		locale: 'en-US',
		name: 'Textile Winding, Twisting, and Drawing Out Machine Setter, Operator, and Tender',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95dd'),
		locale: 'en-US',
		name: 'Machinist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95de'),
		locale: 'en-US',
		name: 'Maid',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95df'),
		locale: 'en-US',
		name: 'Mail Clerk and Mail Machine Operator (Except Postal Service)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e0'),
		locale: 'en-US',
		name: 'Maintenance and Repair Worker, General',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e1'),
		locale: 'en-US',
		name: 'Makeup Artist (Theatrical and Performance)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e2'),
		locale: 'en-US',
		name: 'Management Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e3'),
		locale: 'en-US',
		name: 'Manager (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e4'),
		locale: 'en-US',
		name: 'Manicurist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e5'),
		locale: 'en-US',
		name: 'Manufactured Building and Mobile Home Installer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e6'),
		locale: 'en-US',
		name: 'Manufacturing Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e7'),
		locale: 'en-US',
		name: 'Manufacturing Sales Representative',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e8'),
		locale: 'en-US',
		name: 'Mapping Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95e9'),
		locale: 'en-US',
		name: 'Marble Setter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ea'),
		locale: 'en-US',
		name: 'Marine Mechanic',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95eb'),
		locale: 'en-US',
		name: 'Marine Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ec'),
		locale: 'en-US',
		name: 'Market Research Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ed'),
		locale: 'en-US',
		name: 'Marketing Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ee'),
		locale: 'en-US',
		name: 'Marriage and Family Therapist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ef'),
		locale: 'en-US',
		name: 'Mason: Brick, Block, Stone, and Cement',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f0'),
		locale: 'en-US',
		name: 'Massage Therapist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f1'),
		locale: 'en-US',
		name: 'Material Mover',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f2'),
		locale: 'en-US',
		name: 'Material Moving Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f3'),
		locale: 'en-US',
		name: 'Material Moving Machine Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f4'),
		locale: 'en-US',
		name: 'Materials Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f5'),
		locale: 'en-US',
		name: 'Mathematical Science Occupation (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f6'),
		locale: 'en-US',
		name: 'Materials Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f7'),
		locale: 'en-US',
		name: 'Mathematical Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f8'),
		locale: 'en-US',
		name: 'Mathematician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95f9'),
		locale: 'en-US',
		name: 'Meat, Poultry, and Fish Cutter and Trimmer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95fa'),
		locale: 'en-US',
		name: 'Meat Packer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95fb'),
		locale: 'en-US',
		name: 'Mechanical Door Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95fc'),
		locale: 'en-US',
		name: 'Mechanical Engineering Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95fd'),
		locale: 'en-US',
		name: 'Mechanical Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95fe'),
		locale: 'en-US',
		name: 'Mechanic - Automotive',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b95ff'),
		locale: 'en-US',
		name: 'Mechanic - Diesel',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9600'),
		locale: 'en-US',
		name: 'Mechanic - Heating, Air Conditioning, and Refrigeration',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9601'),
		locale: 'en-US',
		name: 'Mechanic - Industrial Machinery',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9602'),
		locale: 'en-US',
		name: 'Mechanic - Small Engine',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9603'),
		locale: 'en-US',
		name: 'Media and Communication Equipment Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9604'),
		locale: 'en-US',
		name: 'Media and Communication Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9605'),
		locale: 'en-US',
		name: 'Mediator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9606'),
		locale: 'en-US',
		name: 'Medical Appliance Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9607'),
		locale: 'en-US',
		name: 'Medical Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9608'),
		locale: 'en-US',
		name: 'Medical Billing and Coding',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9609'),
		locale: 'en-US',
		name: 'Medical Doctor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b960a'),
		locale: 'en-US',
		name: 'Medical Equipment Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b960b'),
		locale: 'en-US',
		name: 'Medical Laboratory Technologist and Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b960c'),
		locale: 'en-US',
		name: 'Medical Records Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b960d'),
		locale: 'en-US',
		name: 'Medical Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b960e'),
		locale: 'en-US',
		name: 'Medical Services Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b960f'),
		locale: 'en-US',
		name: 'Medical Transcriptionist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9610'),
		locale: 'en-US',
		name: 'Meeting, Convention, and Event Planner',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9611'),
		locale: 'en-US',
		name: 'Mental Health Counselor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9612'),
		locale: 'en-US',
		name: 'Merchandise Displayer and Window Trimmer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9613'),
		locale: 'en-US',
		name: 'Metal Machine Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9614'),
		locale: 'en-US',
		name: 'Metal Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9615'),
		locale: 'en-US',
		name: 'Metal Workers and Plastic Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9616'),
		locale: 'en-US',
		name: 'Meteorologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9617'),
		locale: 'en-US',
		name: 'Meter Reader (Utilities)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9618'),
		locale: 'en-US',
		name: 'Microbiologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9619'),
		locale: 'en-US',
		name: 'Middle School Principal',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b961a'),
		locale: 'en-US',
		name: 'Middle School Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b961b'),
		locale: 'en-US',
		name: 'Millwright',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b961c'),
		locale: 'en-US',
		name: 'Mine Cutting and Channeling Machine Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b961d'),
		locale: 'en-US',
		name: 'Mine Shuttle Car Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b961e'),
		locale: 'en-US',
		name: 'Mining Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b961f'),
		locale: 'en-US',
		name: 'Mining Machine Operator (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9620'),
		locale: 'en-US',
		name: 'Mining Safety Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9621'),
		locale: 'en-US',
		name: 'Mobile Equipment Service Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9622'),
		locale: 'en-US',
		name: 'Model',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9623'),
		locale: 'en-US',
		name: 'Model Maker (Wood)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9624'),
		locale: 'en-US',
		name: 'Molder, Shaper, and Caster (Except Metal and Plastic)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9625'),
		locale: 'en-US',
		name: 'Mortician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9626'),
		locale: 'en-US',
		name: 'Motel Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9627'),
		locale: 'en-US',
		name: 'Motion Picture Projectionist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9628'),
		locale: 'en-US',
		name: 'Motor Vehicle Operator (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9629'),
		locale: 'en-US',
		name: 'Motorcycle Mechanic',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b962a'),
		locale: 'en-US',
		name: 'MRI Technologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b962b'),
		locale: 'en-US',
		name: 'Multimedia Artist and Animator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b962c'),
		locale: 'en-US',
		name: 'Museum Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b962d'),
		locale: 'en-US',
		name: 'Music Director and Composer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b962e'),
		locale: 'en-US',
		name: 'Musical Instrument Repairer and Tuner',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b962f'),
		locale: 'en-US',
		name: 'Musician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9630'),
		locale: 'en-US',
		name: 'Nail Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9631'),
		locale: 'en-US',
		name: 'Natural Sciences Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9632'),
		locale: 'en-US',
		name: 'Naval Architect',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9633'),
		locale: 'en-US',
		name: 'Network Architect',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9634'),
		locale: 'en-US',
		name: 'Network Systems Administrator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9635'),
		locale: 'en-US',
		name: 'News Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9636'),
		locale: 'en-US',
		name: 'Nuclear Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9637'),
		locale: 'en-US',
		name: 'Nuclear Medicine Technologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9638'),
		locale: 'en-US',
		name: 'Nuclear Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9639'),
		locale: 'en-US',
		name: 'Nurse',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b963a'),
		locale: 'en-US',
		name: 'Nurse Anesthetist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b963b'),
		locale: 'en-US',
		name: 'Nurse Midwife',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b963c'),
		locale: 'en-US',
		name: 'Nurse Practitioner',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b963d'),
		locale: 'en-US',
		name: 'Nursing Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b963e'),
		locale: 'en-US',
		name: 'Nutritionist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b963f'),
		locale: 'en-US',
		name: 'Office and Administrative Support Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9640'),
		locale: 'en-US',
		name: 'Office Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9641'),
		locale: 'en-US',
		name: 'Office Machine Operator (Except Computer)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9642'),
		locale: 'en-US',
		name: 'Occupational Health and Safety Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9643'),
		locale: 'en-US',
		name: 'Occupational Health and Safety Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9644'),
		locale: 'en-US',
		name: 'Occupational Therapist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9645'),
		locale: 'en-US',
		name: 'Occupational Therapy Assistant and Aide',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9646'),
		locale: 'en-US',
		name: 'Operations Research Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9647'),
		locale: 'en-US',
		name: 'Ophthalmic Medical Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9648'),
		locale: 'en-US',
		name: 'Optician, Dispensing',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9649'),
		locale: 'en-US',
		name: 'Optometrist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b964a'),
		locale: 'en-US',
		name: 'Orderly',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b964b'),
		locale: 'en-US',
		name: 'Orthotist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b964c'),
		locale: 'en-US',
		name: 'Painter (Construction and Maintenance)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b964d'),
		locale: 'en-US',
		name: 'Painting Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b964e'),
		locale: 'en-US',
		name: 'Paperhanger',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b964f'),
		locale: 'en-US',
		name: 'Paralegal',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9650'),
		locale: 'en-US',
		name: 'Paramedic',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9651'),
		locale: 'en-US',
		name: 'Parking Enforcement Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9652'),
		locale: 'en-US',
		name: 'Parking Lot Attendant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9653'),
		locale: 'en-US',
		name: 'Patternmaker (Wood)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9654'),
		locale: 'en-US',
		name: 'Payroll Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9655'),
		locale: 'en-US',
		name: 'Pedicurist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9656'),
		locale: 'en-US',
		name: 'Personal Care Aide',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9657'),
		locale: 'en-US',
		name: 'Personal Care and Service Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9658'),
		locale: 'en-US',
		name: 'Personal Financial Advisor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9659'),
		locale: 'en-US',
		name: 'Pest Control Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b965a'),
		locale: 'en-US',
		name: 'Petroleum Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b965b'),
		locale: 'en-US',
		name: 'Petroleum Pump System Operator, Refinery Operator, and Gauger',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b965c'),
		locale: 'en-US',
		name: 'Petroleum Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b965d'),
		locale: 'en-US',
		name: 'Pharmacist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b965e'),
		locale: 'en-US',
		name: 'Pharmacy Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b965f'),
		locale: 'en-US',
		name: 'Phlebotomist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9660'),
		locale: 'en-US',
		name: 'Physician Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9661'),
		locale: 'en-US',
		name: 'Physical Scientist (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9662'),
		locale: 'en-US',
		name: 'Physical Therapist Assistant and Aide',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9663'),
		locale: 'en-US',
		name: 'Physical Therapist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9664'),
		locale: 'en-US',
		name: 'Physician Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9665'),
		locale: 'en-US',
		name: 'Physician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9666'),
		locale: 'en-US',
		name: 'Physicist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9667'),
		locale: 'en-US',
		name: 'Pipefitter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9668'),
		locale: 'en-US',
		name: 'Pipelayer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9669'),
		locale: 'en-US',
		name: 'Plant and System Operator (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b966a'),
		locale: 'en-US',
		name: 'Plasterer and Stucco Mason',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b966b'),
		locale: 'en-US',
		name: 'Plastic Machine Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b966c'),
		locale: 'en-US',
		name: 'Plumber',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b966d'),
		locale: 'en-US',
		name: 'Podiatrist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b966e'),
		locale: 'en-US',
		name: 'Police Officer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b966f'),
		locale: 'en-US',
		name: 'Police and Detective',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9670'),
		locale: 'en-US',
		name: 'Police Dispatcher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9671'),
		locale: 'en-US',
		name: 'Political Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9672'),
		locale: 'en-US',
		name: 'Postal Service Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9673'),
		locale: 'en-US',
		name: 'Postmaster and Mail Superintendent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9674'),
		locale: 'en-US',
		name: 'Postsecondary Education Administrator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9675'),
		locale: 'en-US',
		name: 'Postsecondary Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9676'),
		locale: 'en-US',
		name: 'Postsecondary Teacher (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9677'),
		locale: 'en-US',
		name: 'Power Plant Operator, Distributor, and Dispatcher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9678'),
		locale: 'en-US',
		name: 'Practical Nurse, Licensed',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9679'),
		locale: 'en-US',
		name: 'Precious Stone and Metal Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b967a'),
		locale: 'en-US',
		name: 'Precision Instrument and Equipment Repairer (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b967b'),
		locale: 'en-US',
		name: 'Prepress Technician and Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b967c'),
		locale: 'en-US',
		name: 'Preschool Director',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b967d'),
		locale: 'en-US',
		name: 'Preschool Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b967e'),
		locale: 'en-US',
		name: 'Presser (Textile, Garment, and Related Materials)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b967f'),
		locale: 'en-US',
		name: 'Print Binding and Finishing Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9680'),
		locale: 'en-US',
		name: 'Printing Press Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9681'),
		locale: 'en-US',
		name: 'Private Detective and Investigator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9682'),
		locale: 'en-US',
		name: 'Probation Officer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9683'),
		locale: 'en-US',
		name: 'Producer - Film, Theater',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9684'),
		locale: 'en-US',
		name: 'Production Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9685'),
		locale: 'en-US',
		name: 'Production Worker Helper',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9686'),
		locale: 'en-US',
		name: 'Production Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9687'),
		locale: 'en-US',
		name: 'Promotions Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9688'),
		locale: 'en-US',
		name: 'Proofreader and Copy Marker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9689'),
		locale: 'en-US',
		name: 'Property Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b968a'),
		locale: 'en-US',
		name: 'Prosthetist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b968b'),
		locale: 'en-US',
		name: 'Protective Service Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b968c'),
		locale: 'en-US',
		name: 'Psychiatric Technician and Aide',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b968d'),
		locale: 'en-US',
		name: 'Psychologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b968e'),
		locale: 'en-US',
		name: 'Public Relations Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b968f'),
		locale: 'en-US',
		name: 'Public Relations Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9690'),
		locale: 'en-US',
		name: 'Pump Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9691'),
		locale: 'en-US',
		name: 'Purchasing Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9692'),
		locale: 'en-US',
		name: 'Purchasing Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9693'),
		locale: 'en-US',
		name: 'Quality Control Inspector',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9694'),
		locale: 'en-US',
		name: 'Quarry Rock Splitter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9695'),
		locale: 'en-US',
		name: 'Radiation Therapist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9696'),
		locale: 'en-US',
		name: 'Radio Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9697'),
		locale: 'en-US',
		name: 'Radio, Cellular, and Tower Equipment Installer and Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9698'),
		locale: 'en-US',
		name: 'Radiologic Technologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9699'),
		locale: 'en-US',
		name: 'Rail Transportation Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b969a'),
		locale: 'en-US',
		name: 'Railroad Occupation',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b969b'),
		locale: 'en-US',
		name: 'Rancher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b969c'),
		locale: 'en-US',
		name: 'Real Estate Brokers and Sales Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b969d'),
		locale: 'en-US',
		name: 'Real Estate Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b969e'),
		locale: 'en-US',
		name: 'Receptionist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b969f'),
		locale: 'en-US',
		name: 'Recreation Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a0'),
		locale: 'en-US',
		name: 'Recreational Therapist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a1'),
		locale: 'en-US',
		name: 'Recreational Vehicle Service Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a2'),
		locale: 'en-US',
		name: 'Referee, Umpire, and Other Sports Official',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a3'),
		locale: 'en-US',
		name: 'Refractory Materials Repairer (Except Brickmasons)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a4'),
		locale: 'en-US',
		name: 'Refrigeration Mechanic and Installer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a5'),
		locale: 'en-US',
		name: 'Registered Nurse',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a6'),
		locale: 'en-US',
		name: 'Rehabilitation Counselor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a7'),
		locale: 'en-US',
		name: 'Reinforcing Iron and Rebar Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a8'),
		locale: 'en-US',
		name: 'Religious Activities and Education Director',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96a9'),
		locale: 'en-US',
		name: 'Religious Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96aa'),
		locale: 'en-US',
		name: 'Repair and Maintenance Worker, General',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ab'),
		locale: 'en-US',
		name: 'Reporter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ac'),
		locale: 'en-US',
		name: 'Residential Advisor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ad'),
		locale: 'en-US',
		name: 'Respiratory Therapist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ae'),
		locale: 'en-US',
		name: 'Retail Sales Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96af'),
		locale: 'en-US',
		name: 'Rigger',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b0'),
		locale: 'en-US',
		name: 'Roof Bolter (Mining)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b1'),
		locale: 'en-US',
		name: 'Roofer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b2'),
		locale: 'en-US',
		name: 'Rotary Drill Operator (Oil and Gas)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b3'),
		locale: 'en-US',
		name: 'Roustabout (Oil and Gas)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b4'),
		locale: 'en-US',
		name: 'Sales and Related Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b5'),
		locale: 'en-US',
		name: 'Sales Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b6'),
		locale: 'en-US',
		name: 'Sales Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b7'),
		locale: 'en-US',
		name: 'Sales Representative, Services (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b8'),
		locale: 'en-US',
		name: 'School Counselor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96b9'),
		locale: 'en-US',
		name: 'School Principal - Elementary, Middle, and High',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ba'),
		locale: 'en-US',
		name: 'Science Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96bb'),
		locale: 'en-US',
		name: 'Secretary',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96bc'),
		locale: 'en-US',
		name: 'Securities Sales Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96bd'),
		locale: 'en-US',
		name: 'Security and Fire Alarm Systems Installer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96be'),
		locale: 'en-US',
		name: 'Security Guard',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96bf'),
		locale: 'en-US',
		name: 'Segmental Paver',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c0'),
		locale: 'en-US',
		name: 'Semi Truck Driver',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c1'),
		locale: 'en-US',
		name: 'Septic Tank Servicer and Sewer Pipe Cleaner',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c2'),
		locale: 'en-US',
		name: 'Service Unit Operator (Oil, Gas, and Mining)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c3'),
		locale: 'en-US',
		name: 'Set and Exhibit Designer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c4'),
		locale: 'en-US',
		name: 'Sewer (Hand)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c5'),
		locale: 'en-US',
		name: 'Shampooer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c6'),
		locale: 'en-US',
		name: 'Sheet Metal Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c7'),
		locale: 'en-US',
		name: 'Shipping, Receiving, and Traffic Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c8'),
		locale: 'en-US',
		name: 'Shoe and Leather Worker and Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96c9'),
		locale: 'en-US',
		name: 'Signal and Track Switch Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ca'),
		locale: 'en-US',
		name: 'Singer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96cb'),
		locale: 'en-US',
		name: 'Ski Patrol and Other Recreational Protective Service Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96cc'),
		locale: 'en-US',
		name: 'Skincare Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96cd'),
		locale: 'en-US',
		name: 'Slaughterer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ce'),
		locale: 'en-US',
		name: 'Small Engine Mechanic',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96cf'),
		locale: 'en-US',
		name: 'Social Science Research Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d0'),
		locale: 'en-US',
		name: 'Social Scientist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d1'),
		locale: 'en-US',
		name: 'Social Service Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d2'),
		locale: 'en-US',
		name: 'Social Service Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d3'),
		locale: 'en-US',
		name: 'Social Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d4'),
		locale: 'en-US',
		name: 'Sociologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d5'),
		locale: 'en-US',
		name: 'Software Developer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d6'),
		locale: 'en-US',
		name: 'Solar Photovoltaic Installer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d7'),
		locale: 'en-US',
		name: 'Solderer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d8'),
		locale: 'en-US',
		name: 'Sound Engineering Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96d9'),
		locale: 'en-US',
		name: 'Special Education Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96da'),
		locale: 'en-US',
		name: 'Special Education Teacher (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96db'),
		locale: 'en-US',
		name: 'Speech-Language Pathologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96dc'),
		locale: 'en-US',
		name: 'Stationary Engineer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96dd'),
		locale: 'en-US',
		name: 'Statistical Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96de'),
		locale: 'en-US',
		name: 'Statistician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96df'),
		locale: 'en-US',
		name: 'Steamfitter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e0'),
		locale: 'en-US',
		name: 'Steel Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e1'),
		locale: 'en-US',
		name: 'Stonemason',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e2'),
		locale: 'en-US',
		name: 'Substance Abuse Counselor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e3'),
		locale: 'en-US',
		name: 'Subway and Streetcar Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e4'),
		locale: 'en-US',
		name: 'Surgeon',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e5'),
		locale: 'en-US',
		name: 'Surgical Technologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e6'),
		locale: 'en-US',
		name: 'Survey Researcher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e7'),
		locale: 'en-US',
		name: 'Surveying Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e8'),
		locale: 'en-US',
		name: 'Surveyor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96e9'),
		locale: 'en-US',
		name: 'Switchboard Operator (Including Answering Service)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ea'),
		locale: 'en-US',
		name: 'Systems Analyst',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96eb'),
		locale: 'en-US',
		name: 'Tailor, Dressmaker, and Custom Sewer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ec'),
		locale: 'en-US',
		name: 'Tank Car, Truck, and Ship Loader',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ed'),
		locale: 'en-US',
		name: 'Taper',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ee'),
		locale: 'en-US',
		name: 'Tax Examiner, and Collector, and Revenue Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ef'),
		locale: 'en-US',
		name: 'Tax Preparer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f0'),
		locale: 'en-US',
		name: 'Taxi Driver',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f1'),
		locale: 'en-US',
		name: 'Teacher Assistant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f2'),
		locale: 'en-US',
		name: 'Teacher - Adult Literacy and High School Equivalency Diploma',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f3'),
		locale: 'en-US',
		name: 'Teacher - Career and Technical Education Teacher',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f4'),
		locale: 'en-US',
		name: 'Teacher - High School',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f5'),
		locale: 'en-US',
		name: 'Teacher - Kindergarten and Elementary School',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f6'),
		locale: 'en-US',
		name: 'Teacher - Middle School',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f7'),
		locale: 'en-US',
		name: 'Teacher - Postsecondary',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f8'),
		locale: 'en-US',
		name: 'Teacher - Preschool',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96f9'),
		locale: 'en-US',
		name: 'Teacher - Special Education',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96fa'),
		locale: 'en-US',
		name: 'Teacher and Instructor (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96fb'),
		locale: 'en-US',
		name: 'Technical Writer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96fc'),
		locale: 'en-US',
		name: 'Telecommunications Equipment Installer and Repairer (Except Line Installers)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96fd'),
		locale: 'en-US',
		name: 'Telemarketer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96fe'),
		locale: 'en-US',
		name: 'Telephone Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b96ff'),
		locale: 'en-US',
		name: 'Television, Video, and Motion Picture Camera Operator and Editor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9700'),
		locale: 'en-US',
		name: 'Teller',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9701'),
		locale: 'en-US',
		name: 'Terrazzo Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9702'),
		locale: 'en-US',
		name: 'Textile Career',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9703'),
		locale: 'en-US',
		name: 'Textile, Apparel, and Furnishings Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9704'),
		locale: 'en-US',
		name: 'Therapist (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9705'),
		locale: 'en-US',
		name: 'Tile Setter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9706'),
		locale: 'en-US',
		name: 'Timekeeping Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9707'),
		locale: 'en-US',
		name: 'Tire Builder',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9708'),
		locale: 'en-US',
		name: 'Tire Repairer and Changer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9709'),
		locale: 'en-US',
		name: 'Tobacco Processing Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b970a'),
		locale: 'en-US',
		name: 'Tool and Die Maker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b970b'),
		locale: 'en-US',
		name: 'Tool Grinder, Filer, and Sharpener',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b970c'),
		locale: 'en-US',
		name: 'Top Executive',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b970d'),
		locale: 'en-US',
		name: 'Tour Guide and Escort',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b970e'),
		locale: 'en-US',
		name: 'Traffic Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b970f'),
		locale: 'en-US',
		name: 'Training Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9710'),
		locale: 'en-US',
		name: 'Training and Development Specialist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9711'),
		locale: 'en-US',
		name: 'Translator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9712'),
		locale: 'en-US',
		name: 'Transportation Attendant',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9713'),
		locale: 'en-US',
		name: 'Transportation Inspector',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9714'),
		locale: 'en-US',
		name: 'Transportation Security Screener',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9715'),
		locale: 'en-US',
		name: 'Transportation Worker (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9716'),
		locale: 'en-US',
		name: 'Transportation, Storage, and Distribution Manager',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9717'),
		locale: 'en-US',
		name: 'Travel Agent',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9718'),
		locale: 'en-US',
		name: 'Travel Clerk',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9719'),
		locale: 'en-US',
		name: 'Travel Guide',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b971a'),
		locale: 'en-US',
		name: 'Truck Driver - Delivery and Sales Worker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b971b'),
		locale: 'en-US',
		name: 'Truck Driver - Heavy and Tractor-trailer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b971c'),
		locale: 'en-US',
		name: 'Ultrasound Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b971d'),
		locale: 'en-US',
		name: 'Umpire, Referee, and Other Sports Official',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b971e'),
		locale: 'en-US',
		name: 'Upholsterer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b971f'),
		locale: 'en-US',
		name: 'Urban and Regional Planner',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9720'),
		locale: 'en-US',
		name: 'Usher, Lobby Attendant, and Ticket Taker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9721'),
		locale: 'en-US',
		name: 'Vascular Technologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9722'),
		locale: 'en-US',
		name: 'Vending, Coin, and Amusement Machine Servicer and Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9723'),
		locale: 'en-US',
		name: 'Veterinarian',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9724'),
		locale: 'en-US',
		name: 'Veterinary Assistant and Laboratory Animal Caretaker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9725'),
		locale: 'en-US',
		name: 'Veterinary Technologist and Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9726'),
		locale: 'en-US',
		name: 'Video Editor',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9727'),
		locale: 'en-US',
		name: 'Vocational Nurse, Licensed',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9728'),
		locale: 'en-US',
		name: 'Waiter and Waitress',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9729'),
		locale: 'en-US',
		name: 'Watch Repairer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b972a'),
		locale: 'en-US',
		name: 'Water and Wastewater Treatment Plant and System Operator',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b972b'),
		locale: 'en-US',
		name: 'Water Transportation Occupation',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b972c'),
		locale: 'en-US',
		name: 'Web Developer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b972d'),
		locale: 'en-US',
		name: 'Weigher, Measurer, Checker, and Sampler, Recordkeeping',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b972e'),
		locale: 'en-US',
		name: 'Welder and Cutter',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b972f'),
		locale: 'en-US',
		name: 'Wellhead Pumper',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9730'),
		locale: 'en-US',
		name: 'Wholesale Sales Representative',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9731'),
		locale: 'en-US',
		name: 'Wildlife Biologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9732'),
		locale: 'en-US',
		name: 'Wind Turbine Technician',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9733'),
		locale: 'en-US',
		name: 'Word Processor and Typist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9734'),
		locale: 'en-US',
		name: 'Woodworker',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9735'),
		locale: 'en-US',
		name: 'Woodworkers (all other)',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9736'),
		locale: 'en-US',
		name: 'Writer',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9737'),
		locale: 'en-US',
		name: 'X-Ray Technologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},

	{
		_id: ObjectID('5c4247738e548b003f1b9738'),
		locale: 'en-US',
		name: 'Zoologist',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];

module.exports = occupations;
