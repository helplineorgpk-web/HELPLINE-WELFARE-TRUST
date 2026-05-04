/**
 * Per-campaign copy for /campaign/[id] detail sections.
 * Each campaign id should have distinct beneficiaries, usage, objectives, and implementation lines.
 */
export const CAMPAIGN_DETAIL_SECTIONS = {
  "ramzan-2026": {
    beneficiaries: [
      "Families fasting during Ramadan who struggle to afford sehri and iftar groceries.",
      "Households in low-income neighborhoods and rural pockets Helpline serves each Ramadan.",
      "Children and elders in recipient families who rely on one reliable food package.",
    ],
    donationUsage: [
      "Procurement of dated staples, cooking oil, lentils, and hygiene items for Ramadan packs.",
      "Packing, quality checks, and coordinated distribution with local teams and partners.",
      "Logistics for Basic and Family package tiers so donors’ chosen level reaches homes on time.",
    ],
    objectives: [
      "Reduce hunger stress during Ramadan so families can observe the month with dignity.",
      "Deliver predictable ration packs mapped to verified household lists.",
      "Scale reach through transparent tiers donors can repeat year after year.",
    ],
    implementation: [
      "Field teams finalize area-wise lists and pack composition before Ramadan peaks.",
      "Warehouse and volunteer networks assemble Basic (Rs.5,000) and Family (Rs.8,000) packs.",
      "Distribution is tracked with spot checks; feedback informs the next Ramadan planning cycle.",
    ],
  },
  "waqaf-qurbani-2026": {
    beneficiaries: [
      "Low-income and working-poor families in areas where Helpline runs Eid ul Adha meat distribution.",
      "Households with children, elders, or widows for whom a Qurbani portion is a rare source of quality protein.",
      "Communities vetted through local references so support goes to people who are truly deserving, not only the loudest queue.",
    ],
    donationUsage: [
      "Your chosen tier—GOAT (Rs.75,000), COW (PER SHARE) (Rs.37,000), or FULL COW (Rs.259,000)—feeds the WAQAF Qurbani pool for that option (single animal, pooled shares, or whole cow).",
      "Live animal purchase, transport, and Shariah-compliant slaughter; butchering, packing, and cold-chain or same-day handoff where the program requires it.",
      "Field staff, transportation, and basic hygiene supplies at distribution points; light documentation so programs stay auditable for donors and partners.",
    ],
    objectives: [
      "Make WAQAF Qurbani simple to give: three clear prices, one program, no hidden add-ons.",
      "Get safe, edible meat to eligible families in an orderly way—queues, tickets, or zoned handouts as each site needs.",
      "Keep donor confidence through honest communication when market or animal costs shift before Eid.",
    ],
    implementation: [
      "Pre-Eid: confirm demand by tier, book healthy animals with trusted suppliers, and align volunteer rosters with each site’s expected crowd.",
      "Eid days: sacrifice per fiqh protocol for each tier, then pack and label shares for fair handout; escalate crowding or heat risks with on-site leads.",
      "After Eid: match distributed shares to donor bookings, close the books on each tier, and note lessons for the next WAQAF Qurbani cycle.",
    ],
  },
  "rashan-program": {
    beneficiaries: [
      "Working-poor families facing month-end food gaps outside Ramadan season.",
      "Widows and daily-wage households without a safety net when income stalls.",
      "Communities where one monthly ration bridge prevents debt and school hunger.",
    ],
    donationUsage: [
      "Monthly food baskets aligned to local diet and family size norms.",
      "Storage, transport, and fair distribution to reduce duplication and waste.",
      "Monitoring so the Monthly Package tier is honored as recurring support where pledged.",
    ],
    objectives: [
      "Stabilize nutrition year-round—not only during religious peaks.",
      "Make Rs.5,000 monthly sponsorship a clear, repeatable unit of impact.",
      "Link donors to geography-transparent reporting on rashan rounds.",
    ],
    implementation: [
      "Needs verification through field coordinators and community references.",
      "Central packing or hub-based dispatch depending on region.",
      "Quarterly reviews adjust basket contents for price and availability shocks.",
    ],
  },
  "support-the-student": {
    beneficiaries: [
      "Primary and secondary students at risk of dropping out for non-payment of fees or supplies.",
      "Parents choosing between food and school costs in partner school catchments.",
      "Girls and boys in Helpline-supported schools who need predictable monthly backing.",
    ],
    donationUsage: [
      "School fees or approved fee substitutes as per partner school agreements.",
      "Books, uniforms, and exam fees where the gap blocks attendance.",
      "Light tracking with schools to confirm enrollment continuity per tier (1, 5, or 10 students).",
    ],
    objectives: [
      "Keep children in classrooms through the academic year.",
      "Make Rs.2,200 / student / month a standard, scalable sponsorship unit.",
      "Reduce abrupt withdrawals tied to short-term cash shocks.",
    ],
    implementation: [
      "Student lists are validated with school administrators each term.",
      "Disbursements follow school billing cycles; anomalies are escalated quickly.",
      "Donor-facing summaries aggregate headcount helped without exposing child identities.",
    ],
  },
  "adopt-one-student": {
    beneficiaries: [
      "Children in Helpline education networks needing a named “adoption” style commitment.",
      "Families who respond better to one-child framing than abstract school pools.",
      "Learners on monthly sponsorship tracks at multiple partner locations.",
    ],
    donationUsage: [
      "Mirrors Support A Student tiers: 1, 5, or 10 students at Rs.2,200 per student monthly.",
      "Directed to tuition, materials, and welfare touchpoints agreed with each school.",
      "Administration only at levels needed for receipting and school coordination.",
    ],
    objectives: [
      "Grow a culture of adopt-one-child giving alongside bulk school support.",
      "Keep messaging simple: one clear monthly price point per child.",
      "Document retention outcomes for adopted cohorts vs. unsupported peers where measurable.",
    ],
    implementation: [
      "Onboarding explains adoption as financial sponsorship, not guardianship.",
      "Schools confirm continued enrollment before renewing multi-month pipelines.",
      "Annual narrative updates summarize classroom progress at aggregate level.",
    ],
  },
  "keep-a-free-school-running": {
    beneficiaries: [
      "Students attending tuition-free schools that depend on donor operations funding.",
      "Teachers and staff whose salaries and utilities keep doors open daily.",
      "Communities that chose free schooling as the main pathway out of illiteracy.",
    ],
    donationUsage: [
      "School Operations Support (Rs.10,000) toward payroll, utilities, and rent where applicable.",
      "Classroom Essentials (Rs.5,000) for stationery, low-cost labs, and learning aids.",
      "Contingency for minor repairs so teaching is not interrupted.",
    ],
    objectives: [
      "Prevent free schools from slipping into fee-charging or closure.",
      "Balance operating cash with visible classroom outcomes for donors.",
      "Maintain minimum teaching quality through sustained ops funding.",
    ],
    implementation: [
      "Monthly cash-flow planning with school leadership and Helpline finance.",
      "Spot audits on attendance and utility bills tied to operations grants.",
      "Donor reports pair rupee use with enrollment and exam participation trends.",
    ],
  },
  "sponsor-an-orphan-education": {
    beneficiaries: [
      "Orphan and vulnerable children registered in Helpline education pathways.",
      "Caregivers managing households without a primary earner.",
      "Students who need both fee support and psychosocial stability at school.",
    ],
    donationUsage: [
      "Monthly (Rs.5,000) and annual (Rs.15,000) tiers mapped to orphan education protocols.",
      "School costs plus essential supplies so stigma and absence do not compound.",
      "Partner referrals for health or counseling where bundled programs exist.",
    ],
    objectives: [
      "Close the orphan education gap versus non-orphan peers in the same schools.",
      "Offer dignified sponsorship tiers donors can budget annually or monthly.",
      "Track continuation rates through at least one full cycle of secondary school.",
    ],
    implementation: [
      "Eligibility checks through local councils and existing Helpline case files.",
      "Dual approval for fee payments to schools and direct supply purchases.",
      "Bi-annual caregiver interviews to catch dropout risk early.",
    ],
  },
  "sponsor-one-classroom": {
    beneficiaries: [
      "Class-sized groups who gain a safe room, furniture, and teaching wall space.",
      "Teachers delivering lessons in previously overcrowded or unsafe rooms.",
      "Schools expanding intake once a classroom is build-ready.",
    ],
    donationUsage: [
      "Civil, furnishing, and equipment lines across Rs.25,000 to Rs.500,000 tiers.",
      "Engineering oversight for structural gifts; procurement for desks and boards.",
      "Naming or dedication options where campaigns and donors align.",
    ],
    objectives: [
      "Add net classroom capacity where land and permits already exist.",
      "Sequence gifts from contribution → build → furnish → handover.",
      "Photograph and document each completed room for donor transparency.",
    ],
    implementation: [
      "Site survey and BOQ before large pledges are accepted.",
      "Phased draws against construction milestones.",
      "Handover ceremony with school committee and usage guidelines.",
    ],
  },
  "build-school-play-area": {
    beneficiaries: [
      "Primary-age children without safe outdoor motor development space.",
      "Schools mandated to offer play but lacking budget for equipment and surfacing.",
      "Teachers integrating movement and recess into learning outcomes.",
    ],
    donationUsage: [
      "Play Area Support, Expansion, Equipment, and Complete Play Zone tiers as defined.",
      "Safety surfacing and shade where sun exposure is severe.",
      "Maintenance fund seed for repairs after monsoon or heavy use.",
    ],
    objectives: [
      "Cut injury risk versus improvised play on hard or uneven ground.",
      "Improve attendance and joy metrics linked to structured recess.",
      "Meet child-rights aligned expectations for non-academic development.",
    ],
    implementation: [
      "Play design adapted to age mix and school gender split.",
      "Vendor selection with warranty on major equipment.",
      "Post-install safety walkthrough with staff and student council.",
    ],
  },
  "build-new-six-story-alkitab-school": {
    beneficiaries: [
      "Future thousands of students planned for the expanded Alkitab campus.",
      "Current students in transition layouts during multi-year construction.",
      "Neighborhood families betting on a flagship education anchor.",
    ],
    donationUsage: [
      "Capital stack from Rs.25,000 supporter gifts up to Rs.1,000,000 lead sponsor tiers.",
      "Civil works, vertical transport, fire, and structural compliance.",
      "Professional fees and permits proportional to mega-project governance.",
    ],
    objectives: [
      "Deliver a six-story facility that meets enrollment growth and safety codes.",
      "Maintain donor confidence on a multi-year capital roadmap.",
      "Pair mega-gifts with broad small-donor participation.",
    ],
    implementation: [
      "Construction management with independent quantity and quality checks.",
      "Milestone-based fundraising and public updates.",
      "Risk register for weather, supply chain, and currency effects on build cost.",
    ],
  },
  "sponsor-one-floor-new-school": {
    beneficiaries: [
      "Entire grade bands or departments hosted on one sponsored floor.",
      "Donors seeking visible, named vertical slices of the new build.",
      "Students whose timetable stabilizes once a floor is handed over.",
    ],
    donationUsage: [
      "Floor Sponsorship Support (Rs.500,000) through Principal Floor Sponsor (Rs.5,000,000).",
      "Shell, MEP rough-in, finishes, and corridor safety for that level.",
      "Signage and dedication commensurate with gift agreements.",
    ],
    objectives: [
      "Sequence floor completion to unlock partial occupancy early.",
      "Match major donors to engineering milestones they can visit.",
      "Avoid funding gaps mid-slab that stall the whole tower.",
    ],
    implementation: [
      "Legal agreements for naming and recognition windows.",
      "Structural sign-off before interior spend on each floor.",
      "Donor site days scheduled around safe construction windows.",
    ],
  },
  "support-adopted-government-school": {
    beneficiaries: [
      "Children in interior Sindh government schools Helpline has adopted and upgraded.",
      "Head teachers reviving enrollment after years of neglect.",
      "Villages where the school is the only public good within walking distance.",
    ],
    donationUsage: [
      "Basic (Rs.5,000), Learning Materials (Rs.10,000), and School Improvement (Rs.25,000) tracks.",
      "WASH repairs, teacher support, and classroom kits per school improvement plan.",
      "Community mobilization for parent–teacher engagement.",
    ],
    objectives: [
      "Raise attendance and learning quality in adopted GPS campuses.",
      "Standardize a minimum “revived school” kit across adoptions.",
      "Document before/after enrollment for provincial advocacy.",
    ],
    implementation: [
      "Per-school MOUs with district education offices where required.",
      "Termly head-teacher reports on utilization of Helpline grants.",
      "Random spot visits to verify children in class, not just receipts.",
    ],
  },
  "adopt-student-at-alkitab-school": {
    beneficiaries: [
      "Alkitab School pupils on monthly sponsorship rosters.",
      "Families referred through Alkitab intake who cannot pay full cost.",
      "Girls and boys tracked for multi-year completion at this flagship.",
    ],
    donationUsage: [
      "Strictly Alkitab fee and materials schedules for 1 / 5 / 10 student tiers.",
      "Coordination with Alkitab finance so sponsorships do not double-pay.",
      "Top-up for transport or meals only when board-approved.",
    ],
    objectives: [
      "Saturate Alkitab with predictable monthly education income.",
      "Highlight Alkitab as a donor-loved brand within Helpline.",
      "Minimize idle seats for lack of fee payment.",
    ],
    implementation: [
      "Monthly reconciliation between donor ledger and Alkitab bursar.",
      "Waitlist policy when tiers exceed available places.",
      "Story consent process for any public impact features.",
    ],
  },
  "adopt-student-at-marawan-school": {
    beneficiaries: [
      "Marawan School students on thin financial margins.",
      "Parents in Marawan catchment juggling agricultural income volatility.",
      "Teachers stabilizing classrooms when fees arrive on time.",
    ],
    donationUsage: [
      "Marawan-specific fee and supply schedules under 1 / 5 / 10 student packages.",
      "Local transport stipends only if school committee approves cases.",
      "Exam and registration bursts covered where tier allows.",
    ],
    objectives: [
      "Lift Marawan retention to match or beat regional averages.",
      "Make Marawan a proof point for school-branded adoption.",
      "Reduce mid-year exits after harvest failures.",
    ],
    implementation: [
      "Marawan principal signs off beneficiary lists each quarter.",
      "Field officer Marawan visits tied to payment cycles.",
      "Anonymous attendance samples cross-checked with sponsorship file.",
    ],
  },
  "adopt-student-at-umer-kot-school": {
    beneficiaries: [
      "Umer Kot School children needing fee continuity.",
      "Families in Umer Kot neighborhoods with irregular remittance income.",
      "First-generation learners aiming to complete primary and beyond.",
    ],
    donationUsage: [
      "Umer Kot School–approved allocations for 1 / 5 / 10 monthly tiers.",
      "Learning materials purchased in bulk for efficiency.",
      "Special assessment fees when board exams approach.",
    ],
    objectives: [
      "Anchor Umer Kot as a stable adoption geography for Helpline.",
      "Grow 5- and 10-student donors from diaspora and cities.",
      "Tie gifts to visible attendance gains.",
    ],
    implementation: [
      "School bursar issues term statements to Helpline before disbursement.",
      "Escalation path if a sponsored child changes schools.",
      "Year-end letter summarizing cohort outcomes.",
    ],
  },
  "adopt-student-at-ch-rehmat-ali-school": {
    beneficiaries: [
      "Students enrolled at Ch Rehmat Ali School under sponsorship.",
      "Siblings in the same household where one fee breaks the budget for all.",
      "Teachers who can plan terms knowing fees are covered.",
    ],
    donationUsage: [
      "Ch Rehmat Ali fee rules applied to Rs.2,200 / 11,000 / 22,000 tiers.",
      "Stationery drives timed to reopening after summer.",
      "Uniform subsidy windows once per year where tier pooled.",
    ],
    objectives: [
      "Demonstrate repeatable adoption model at Ch Rehmat Ali scale.",
      "Encourage local business to sponsor 10-student blocks.",
      "Keep gender balance in sponsored queues.",
    ],
    implementation: [
      "Joint Helpline–school committee for hardship appeals.",
      "Sponsor churn handled with waitlist backfill within 30 days.",
      "Data hygiene: no duplicate active sponsor per child.",
    ],
  },
  "adopt-student-at-imran-maryam-school": {
    beneficiaries: [
      "Imran Maryam School learners on sponsorship waitlists and active rolls.",
      "Households combining farm and informal work near the campus.",
      "Students needing both fee and minor welfare top-ups.",
    ],
    donationUsage: [
      "Imran Maryam–specific schedules for monthly 1 / 5 / 10 tiers.",
      "Welfare referrals (nutrition, health camp) from pooled welfare line when approved.",
      "Technology or lab fees if introduced mid-year.",
    ],
    objectives: [
      "Deepen Imran Maryam donor loyalty through named school channel.",
      "Smooth fee shocks when new subjects or grades add costs.",
      "Publish aggregate pass rates for sponsored vs. non-sponsored (where ethical).",
    ],
    implementation: [
      "Imran Maryam liaison officer for Helpline donations.",
      "Bi-monthly finance meeting on outstanding fee gaps.",
      "Crisis fund tranche for family emergencies affecting attendance.",
    ],
  },
  "adopt-student-at-imam-maryam-smart-school": {
    beneficiaries: [
      "Imam Maryam Smart School students in digital-forward classrooms.",
      "Families investing hope in smart boards and IT labs but unable to pay fully.",
      "Girls especially encouraged through safe tech-enabled learning.",
    ],
    donationUsage: [
      "Tuition aligned to smart-school fee structure plus digital resource fees.",
      "Repair or replace low-cost devices when depreciation funds exist.",
      "Electricity and connectivity subsidies during load-shedding seasons.",
    ],
    objectives: [
      "Prove adoption works in technology-heavy school models.",
      "Avoid digital divide within the same classroom.",
      "Secure spare parts float for labs.",
    ],
    implementation: [
      "IT asset register shared with Helpline for gifts above fee-only.",
      "Acceptable-use policy communicated to sponsored families.",
      "Backup power plan for exam weeks.",
    ],
  },
  "adopt-student-at-chaman-goth-school": {
    beneficiaries: [
      "Chaman Goth School students from peri-urban settlements.",
      "Migrant-adjacent families with unstable addresses but steady school intent.",
      "Younger siblings who enroll once elder sibling proves sponsorship works.",
    ],
    donationUsage: [
      "Chaman Goth fee ladders for 1 / 5 / 10 tiers without cross-subsidy to other schools.",
      "Bus or van cost shares if school runs collective transport.",
      "Rain gear and footwear in monsoon kit rounds.",
    ],
    objectives: [
      "Stabilize Chaman Goth enrollment against urban drift to work.",
      "Build donor circles who adopt 10-student blocks together.",
      "Track sibling pipelines into the same school.",
    ],
    implementation: [
      "Address verification light enough for dignity, strong enough for fraud control.",
      "Transport roster audits during fee cycles.",
      "Community elder sign-off for new hardship cases.",
    ],
  },
  "adopt-student-at-helpline-operated-school-bhidotki": {
    beneficiaries: [
      "Bhidotki Helpline-operated school students in direct trust management.",
      "Village clusters where Helpline is the primary quality school option.",
      "Children whose parents prefer trust-run accountability.",
    ],
    donationUsage: [
      "100% aligned to Helpline Bhidotki school budget lines for sponsorship tiers.",
      "Quality upgrades (teacher training, library) when surplus allows.",
      "No leakage to non-Bhidotki sites without board approval.",
    ],
    objectives: [
      "Showcase operational excellence on a Helpline-owned campus.",
      "Hit sponsor satisfaction through tight internal controls.",
      "Pilot innovations (assessment tools) fundable via adoption surplus.",
    ],
    implementation: [
      "Internal audit cadence higher than partner schools.",
      "Head-teacher weekly ops call with central education team.",
      "Donor dashboards with Bhidotki-specific KPIs.",
    ],
  },
  "give-name-in-memory-of-loved-one": {
    beneficiaries: [
      "Future students who will learn in spaces carrying memorial naming rights.",
      "Families of donors seeking lasting sadaqah jariyah through education.",
      "Communities who see named facilities as moral anchors.",
    ],
    donationUsage: [
      "Rs.500,000 Naming Contribution toward capital or endowed maintenance.",
      "Legal drafting for plaque text, usage duration, and renewal terms.",
      "Construction or refurbishment tranche tied to naming agreement.",
    ],
    objectives: [
      "Merge grief and gratitude into bricks-and-mortar legacy.",
      "Protect dignity of names with respectful architectural integration.",
      "Balance exclusivity of naming with public access missions.",
    ],
    implementation: [
      "Legal review of naming deeds and Islamic permissibility framing.",
      "Design sign-off on font, placement, and lighting.",
      "Annual remembrance message to donor families on handover anniversaries.",
    ],
  },
  "vocational-training-center": {
    beneficiaries: [
      "Youth finishing training in trades Helpline vocational centers teach.",
      "Women entering income through certified short courses.",
      "Employers who hire graduates when skills match market demand.",
    ],
    donationUsage: [
      "Training Sponsorship (Rs.15,000) covering tuition, tools, and certification fees.",
      "Instructor honoraria and consumables (materials, safety gear).",
      "Job-placement follow-up transport for interviews.",
    ],
    objectives: [
      "Convert trainees into wage or self-employment within agreed horizons.",
      "Refresh curricula yearly with local employer input.",
      "Gender-intentional cohort scheduling where cultural barriers exist.",
    ],
    implementation: [
      "Pre-training literacy and numeracy screen where trades require it.",
      "Modular exams and practical assessments with external observers occasionally.",
      "Alumni tracking at 3, 6, and 12 months.",
    ],
  },
  "school-masjid-project": {
    beneficiaries: [
      "Students and staff praying on campus without traveling unsafe distances.",
      "Community members invited to jamaat within agreed guidelines.",
      "Parents who choose the school partly for integrated spiritual care.",
    ],
    donationUsage: [
      "Brick Contribution (Rs.5,000) and Room Sponsor (Rs.100,000) lines toward masjid–maktab build.",
      "Qibla accuracy, wudu facilities, and women’s prayer space per design.",
      "Sound, ventilation, and child-safety details in shared corridors.",
    ],
    objectives: [
      "Complete a dignified masjid wing aligned with school safety codes.",
      "Avoid prayer disruption to class bells through smart zoning.",
      "Welcome transparent masonry and room sponsorship counts.",
    ],
    implementation: [
      "Religious advisory on dimensions and accessibility.",
      "Construction phased so school stays operational.",
      "Opening event with local ulema and education officials.",
    ],
  },
  "qurbani-2026": {
    beneficiaries: [
      "Meat-insecure families on Eid ul Adha in targeted distributions.",
      "Urban and rural queues organized for dignified shares.",
      "Elders and children for whom protein access is rare.",
    ],
    donationUsage: [
      "Animal purchase, healthy slaughter, and cold-chain or immediate distribution.",
      "Goat Share, Full Goat, and Cow Share tiers executed per Shariah protocol.",
      "Waste disposal and hygiene compliance at sacrifice sites.",
    ],
    objectives: [
      "Fulfill donors’ qurbani with clear fiqh-compliant documentation.",
      "Maximize edible meat reaching eligible households.",
      "Reduce chaos at distribution through ticketing or zone plans.",
    ],
    implementation: [
      "Pre-Eid supplier contracts and vet checks.",
      "Volunteer training on cutting, packing, and queue control.",
      "Post-Eid audit of shares vs. pledges.",
    ],
  },
  "sponsor-womens-skills-training": {
    beneficiaries: [
      "Women enrolled in employable skills courses who lack fees or kit money.",
      "Trainees balancing care work who need flexible payment of materials.",
      "Households where one graduate earner changes family trajectory.",
    ],
    donationUsage: [
      "Starter (Rs.3,000), Training materials (Rs.5,000), Trainee support (Rs.10,000) packages.",
      "Instructor time, raw materials for practice pieces, and exam fees.",
      "Childcare stipends in pilots where barriers are proven.",
    ],
    objectives: [
      "Raise course completion rates versus dropout from cash gaps.",
      "Publish graduate employment or micro-enterprise starts.",
      "Rotate trades by local labor market demand.",
    ],
    implementation: [
      "Intake interviews documenting income and motivation.",
      "Mid-course retention calls when attendance dips.",
      "Exit surveys feeding next curriculum intake.",
    ],
  },
  "fund-womens-workshop": {
    beneficiaries: [
      "Women’s workshops needing machines, spare parts, and space upkeep.",
      "Trainees whose learning stops when a single machine fails.",
      "Communities where women’s collective workspaces are scarce.",
    ],
    donationUsage: [
      "Materials (Rs.5,000), Machine (Rs.10,000), Workshop (Rs.25,000) support lines.",
      "Preventive maintenance contracts and operator safety training.",
      "Utility buffers so power bills do not idle equipment.",
    ],
    objectives: [
      "Keep workshop doors open year-round, not only at grant spikes.",
      "Build a replacement fund for depreciating machines.",
      "Pair donations with sales revenue where products are sold.",
    ],
    implementation: [
      "Equipment register with depreciation schedule.",
      "Women’s committee sign-off on major purchases.",
      "Quarterly open-house for donors virtually or on-site.",
    ],
  },
  "sponsor-chicken-box": {
    beneficiaries: [
      "Rural and peri-urban families ready for small livestock but lacking seed capital.",
      "Women-headed households seeking home-near income.",
      "Children benefiting from eggs and occasional meat in diet.",
    ],
    donationUsage: [
      "Starter (Rs.3,000), Family (Rs.10,000), Bigger (Rs.25,000) livelihood packages.",
      "Veterinary starter meds, feed, and coop materials.",
      "Training on care, vaccination schedules, and marketing eggs.",
    ],
    objectives: [
      "Move families one step up the livestock ladder responsibly.",
      "Reduce failed attempts through pre-delivery training.",
      "Track survival rates and first 90-day sales.",
    ],
    implementation: [
      "Eligibility: space, water, and consent for animal welfare standards.",
      "Delivery coordinated to avoid heat stress.",
      "Follow-up visits at day 7 and day 30.",
    ],
  },
  "give-zakat-highest-need": {
    beneficiaries: [
      "Zakat-eligible individuals across programs Helpline certifies each cycle.",
      "Emergency cases that fit classical zakat categories in local fatwa guidance.",
      "Geographies where zakat is pooled for maximum marginal impact.",
    ],
    donationUsage: [
      "Allocation by zakat committee to medicine, food, debt relief, or asset grants.",
      "Strict separation of zakat vs. sadaqah general ledgers.",
      "Audit trail from donor receipt to beneficiary sign-off.",
    ],
    objectives: [
      "Honor donor niyyah with scholar-reviewed policies.",
      "Publish aggregate zakat deployment categories annually.",
      "Never commingle zakat with non-eligible overhead without explicit fiqh-compliant structures.",
    ],
    implementation: [
      "Seasonal zakat windows with surge staffing on verification.",
      "Dual sign-off on outlays above threshold.",
      "Beneficiary dignity protocols (no public naming).",
    ],
  },
  "install-ro-filter-plant": {
    beneficiaries: [
      "Villages and wards drinking brackish or contaminated groundwater.",
      "Schools and mosques that can host a community RO plant.",
      "Women and children reducing walk time once clean water is local.",
    ],
    donationUsage: [
      "Civil pad, RO skid, storage tanks, and electrical hookup for ~Rs.1M plant target.",
      "Water testing before and after commissioning.",
      "Community handover training on filters and shutdowns.",
    ],
    objectives: [
      "Install durable plants with spare-parts pathway for 5+ years.",
      "Prioritize hydrologically justified sites over political favor.",
      "Document TDS and bacterial tests pre/post.",
    ],
    implementation: [
      "Hydro survey and third-party water quality lab.",
      "Contractor milestones with retention money.",
      "Village water committee trained before keys handover.",
    ],
  },
  "support-existing-ro-plant": {
    beneficiaries: [
      "Users of plants already built but at risk of shutdown from bills or filters.",
      "Schools and neighborhoods on monthly Rs.150,000 run-rate targets.",
      "Patients and elders who cannot tolerate another dry spell.",
    ],
    donationUsage: [
      "Membrane and cartridge replacement, pump repairs, and electricity.",
      "Technician retainers for same-week breakdown response.",
      "Chemicals and lab strips for ongoing quality checks.",
    ],
    objectives: [
      "Zero avoidable downtime months on monitored plants.",
      "Build a sustainer donor base for recurring RO ops.",
      "Benchmark cost per liter vs. bottled water waste.",
    ],
    implementation: [
      "Monthly meter and maintenance log review.",
      "Escalation if downtime exceeds SLA.",
      "Year-end asset life plan for major overhauls.",
    ],
  },
  "fund-kmc-essential-medicines": {
    beneficiaries: [
      "KMC-served patients prescribed medicines they cannot purchase.",
      "Chronic disease clients on long courses needing refill support.",
      "Elderly and children in outpatient queues at partner facilities.",
    ],
    donationUsage: [
      "Pharmacy procurement of generics and essential brand lines under formulary.",
      "Cold-chain items where indicated.",
      "Inventory software to cut expiry losses.",
    ],
    objectives: [
      "Shrink ‘prescribed but unfilled’ rates in tracked cohorts.",
      "Negotiate volume pricing with ethical suppliers.",
      "Report disease-wise medicine outlay for donor transparency.",
    ],
    implementation: [
      "Hospital pharmacy committee approves additions to donor-funded basket.",
      "FIFO stock discipline and quarterly audits.",
      "Patient voucher or digital trace where privacy allows.",
    ],
  },
  "support-kmc-patient-care": {
    beneficiaries: [
      "Patients needing free consultations, vitals, and clinic-day procedures.",
      "Women’s health and child wellness visits under camp formats.",
      "Referrals to higher care when diagnostics flag risk.",
    ],
    donationUsage: [
      "Clinician time, disposable supplies, and basic diagnostics.",
      "Camp logistics—shade, queue, privacy screens.",
      "Referral transport vouchers for urgent escalations.",
    ],
    objectives: [
      "Increase completed care episodes versus drop-offs at triage.",
      "Standardize clinic-day kits per specialty rotation.",
      "Integrate with medicine fund where dual needs appear.",
    ],
    implementation: [
      "Rota planning with KMC medical leadership.",
      "Pre-registration SMS to reduce wait times.",
      "End-of-day reconciliation of consumables used.",
    ],
  },
  "mithi-mobile-dispensary-ambulance": {
    beneficiaries: [
      "Tharparkar and desert-edge patients far from static hospitals.",
      "Emergency transfers once ambulance upgrade is live.",
      "Pregnant women and trauma cases needing timely wheels.",
    ],
    donationUsage: [
      "Vehicle chassis upgrade, medical fit-out, oxygen, suction, and communications.",
      "Driver and EMT training for desert routes.",
      "Fuel and insurance seed until operational budget steadies.",
    ],
    objectives: [
      "Close the ~Rs.13M capital gap with phased public gifts.",
      "Cut referral travel time versus current dispensary van limits.",
      "Meet regulatory ambulance specs for inter-facility transfer.",
    ],
    implementation: [
      "Engineering spec sign-off with health department.",
      "Donor milestone map tied to chassis, box, and kit.",
      "Road trials with dummy loads before patient first ride.",
    ],
  },
  "restore-sight-cataract-surgery": {
    beneficiaries: [
      "Cataract-blind or low-vision patients cleared for surgery plus lens.",
      "Elders returning to work and caregiving after sight restoration.",
      "Families relieved of constant attendant burden.",
    ],
    donationUsage: [
      "Rs.13,000 per operation including lens—1 / 2 / 5 / 10 surgery tiers.",
      "Sterile supplies, surgeon fees, and follow-up drops.",
      "Transport stipends for distant districts when pooled.",
    ],
    objectives: [
      "Clear surgical backlog camps with infection-rate controls.",
      "Pair donations with ophthalmology partner capacity.",
      "Measure visual acuity gains at 6 weeks.",
    ],
    implementation: [
      "Pre-op screening days with biometry for lens power.",
      "Theatre day lists optimized by donor blocks.",
      "Post-op call center for redness or pain spikes.",
    ],
  },
  "emergency-response-fund": {
    beneficiaries: [
      "Populations hit by sudden floods, fires, or displacement events.",
      "First responders needing cash for fuel, boats, and med kits.",
      "Journalists and local councils coordinating honest needs maps.",
    ],
    donationUsage: [
      "Rapid cash windows from Rs.5,000 to Rs.100,000 donor tiers aggregated.",
      "Rescue assets rental, emergency kitchens, and temporary shelter plastic.",
      "Satellite phones or drones in approved corridors when justified.",
    ],
    objectives: [
      "Deploy within hours—not weeks—of verified crisis triggers.",
      "Keep a flexible pool not locked to one disaster type.",
      "Publish rapid transparency memos even when detail is partial.",
    ],
    implementation: [
      "24/7 activation protocol with signatories.",
      "Dual procurement for speed and anti-fraud.",
      "After-action review within 30 days of close.",
    ],
  },
  "donate-calamity-management-program": {
    beneficiaries: [
      "Communities in multi-phase disaster cycles needing relief then rehab.",
      "Local governments lacking surge implementation partners.",
      "Households rebuilding livelihoods after water retreats.",
    ],
    donationUsage: [
      "Emergency supplies, family relief, response support, and major support tiers as defined.",
      "Early warning community drills and stockpiles.",
      "Livelihood tool replacement grants post-disaster.",
    ],
    objectives: [
      "Replace single-hazard thinking with full-cycle calamity readiness.",
      "Blend donor money across preparedness and recovery lines.",
      "Coordinate with provincial disaster management frameworks.",
    ],
    implementation: [
      "Seasonal risk maps updated before monsoon and winter.",
      "Partner MOUs for warehouse sharing.",
      "Beneficiary registry deduplicated across relief waves.",
    ],
  },
  "sponsor-safe-home-disaster-family": {
    beneficiaries: [
      "Families whose shelters failed in floods or earthquakes.",
      "Women-headed rebuilds facing unsafe temporary tents too long.",
      "Villages adopting improved resilient house models.",
    ],
    donationUsage: [
      "Starter (Rs.25,000), Housing (Rs.50,000), Major housing (Rs.100,000) gifts toward safer units.",
      "Engineering oversight, lintels, foundations, and roof ties.",
      "Legal land or occupancy checks before build.",
    ],
    objectives: [
      "Reduce repeat damage in the next shock versus pre-disaster huts.",
      "Tell story-led proof cases with owner consent.",
      "Blend donations with owner sweat equity where policy requires.",
    ],
    implementation: [
      "BoQ per region for soil and wind load.",
      "Mason training on ring beams and damp-proof courses.",
      "Post-occupancy inspection at 6 months.",
    ],
  },
};
