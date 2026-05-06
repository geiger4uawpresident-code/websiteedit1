import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  Handshake,
  Heart,
  PieChart,
  Landmark,
  Network,
  ChevronRight,
  Quote,
  History as HistoryIcon,
  type LucideIcon
} from 'lucide-react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
interface Pillar {
  id: string;
  title: string;
  icon: LucideIcon;
  problem: string;
  commitments: string[];
  memberMessage: string;
}
export function PlatformSection() {
  const pillars: Pillar[] = useMemo(() => [
    {
      id: "01",
      title: "Clean Governance & Institutional Reform",
      icon: Shield,
      problem: "The Independent Monitor found: an ongoing culture of fear, retaliation, manipulation of compliance, and weakened financial oversight. This was not just about bad individuals — it was a system of unaccountable power that operated without a budget, without transparency, and without consequence. Members voted for reform. We have an obligation to deliver it. The union is in financial peril and we have to get our house under control.",
      commitments: [
        "Implement real-time forensic auditing of all international and regional expenditures accessible via a secure member portal.",
        "Establish an Independent Member Oversight Committee with the constitutional power to subpoena financial records and report directly to the membership.",
        "Mandatory 'Constitutional Town Halls' held 30 days prior to any major International Executive Board vote on policy changes or administrative expenditures.",
        "Strict 'No-Gift' policy for all elected officials with immediate removal for violations and a ban on corporate-funded travel.",
        "Direct election of all International Representatives to ensure they answer to the members they service, not the people who appoint them."
      ],
      memberMessage: "Members voted for reform. The Monitor found an ongoing culture of fear and no budget. We owe it to every member to deliver something different — not someday, but on day one."
    },
    {
      id: "02",
      title: "Bargaining: Preparing for the Fights Ahead",
      icon: Handshake,
      problem: "The issues our members are facing at the bargaining table are more complex than ever before. For years, corporations have refined their ability to use intricate contracts to hide concessions, while members were often the last to know the details of the deals that define their lives. We are entering a bargaining climate where automation, the 'green transition,' and global competition are being used as threats to our job security and standards. We need a strategy that uses our full economic power and puts the corporation on the defensive. We will no longer accept contracts that trade the future of our new members for the comfort of the current leadership. We have a plan and the will to execute it.",
      commitments: [
        "Adopt 'Open Bargaining' protocols: Daily digital updates and summarized transcripts of negotiations provided to the membership.",
        "Establish an Economic War Room staffed by labor economists and industry experts to counter corporate misinformation.",
        "A binding constitutional commitment to eliminate ALL tiered wage and benefit systems in the first contract negotiated under this administration.",
        "Full contract language must be released to the membership in a searchable digital format 7 days before any ratification vote.",
        "Standardized 'Solidarity Clauses' in all sector contracts to allow for common expiration dates and coordinated industrial action.",
        "Mandatory strike-readiness training for every local 12 months prior to contract expiration."
      ],
      memberMessage: "The fights ahead are real. So is our commitment to fighting them on your terms — with your voice, your priorities, and your power leading the way."
    },
    {
      id: "03",
      title: "Staff & Local Leader Development",
      icon: Users,
      problem: "Our representatives are often outmatched not by talent, but by the modern digital tools, legal resources, and data analytics deployed by multi-national corporations. A lack of standardized, high-level training for stewards and servicing reps leads to inconsistent enforcement of our hard-won rights. We cannot win tomorrow's grievances with yesterday's training. We must build a culture where preparation is the baseline for every leader.",
      commitments: [
        "Launch the 'UAW Leadership Institute'—a mandatory, rigorous certification program for all servicing reps and local stewards.",
        "Implement a Universal Digital Grievance Tracking System allowing members to see the status, history, and notes of their case in real-time.",
        "Expand specialized legal and safety support staff to provide 24/7 assistance for complex industrial hazards and legal challenges.",
        "Create a 'Best Practices' digital library where locals can share successful strategies, contract language, and organizing wins.",
        "Institutionalize 'Shadowing Programs' where new stewards learn from veteran leaders on the shop floor before taking office."
      ],
      memberMessage: "Every member deserves representation that is trained to the highest level. We will settle for nothing less."
    },
    {
      id: "04",
      title: "Reimagining National Political Action & CAP",
      icon: Landmark,
      problem: "Labor's voice has been treated as a 'transactional' asset by politicians who take our V-CAP money and then fail to deliver on fundamental worker protections. We have been too quick to endorse and too slow to hold elected officials accountable. We must return to a model where we use our political weight to move the needle for all workers, not just to gain access to the halls of power.",
      commitments: [
        "Tie all V-CAP endorsements strictly to a 'Labor-First' scorecard focused on anti-tier, anti-scab, and card-check legislation.",
        "Grant local councils Veto Power over regional endorsements that conflict with local member priorities or candidate records.",
        "Aggressive, member-led lobbying for the 'Worker Freedom Act' to end forced captive audience meetings and 'right-to-work' laws.",
        "Establish a 'UAW Political Fellowships' program to train rank-and-fold members to run for local and state offices.",
        "Direct member-led development of the biennial UAW National Legislative Agenda through regional summits."
      ],
      memberMessage: "It's time we stop being a junior partner to political parties and start being a lead negotiator at the bargaining table."
    },
    {
      id: "05",
      title: "Healthcare: Bargaining, Standards & the Issue Campaign",
      icon: Heart,
      problem: "Healthcare is a fundamental human right, yet it is being used by corporations as a tool of coercion during negotiations. The 'healthcare cliff'—where rising premiums and shrinking networks roll back wage increases—is a deliberate corporate strategy. We must treat healthcare not just as a benefit to be defended, but as a national issue campaign that we lead for the entire working class.",
      commitments: [
        "Create a National UAW Healthcare Trust Defense Fund to aggressively litigate and fight off network reductions and cost-shifts.",
        "Contractual guarantees for Healthcare Cost-Caps: Ensuring take-home pay never decreases due to premium or deductible hikes.",
        "Mandatory mental health and substance abuse support parity in every multi-sector agreement, including onsite support where possible.",
        "Establish a Retiree Healthcare Advocacy Board to protect VEBA and traditional plans from inflationary erosion."
      ],
      memberMessage: "Every member has a right to health and dignity. We will fight for it at the table and in the streets."
    },
    {
      id: "06",
      title: "Internal Campaign Finance Reform & Union Integrity",
      icon: PieChart,
      problem: "The move to Direct Elections was a victory for the members, but the 'incumbency advantage' remains a barrier to true democracy. When dues dollars are used to fund the public relations of sitting officers during election cycles, it creates an unlevel playing field. We need strict rules that separate the work of the union from the work of campaigning, ensuring that every member has a fair shot at leading.",
      commitments: [
        "Strict separation of union communication assets from campaign activities during election periods.",
        "Commitment to a 30% reduction in non-essential administrative overhead at Solidarity House within 24 months.",
        "Redirection of saved administrative funds directly to 'Ground-War' organizing and local servicing budgets.",
        "Quarterly 'Dues Transparency Reports' mailed to every member's home, detailing exactly how every dollar is spent.",
        "Establish an independent Election Commission to oversee all international and regional votes with no ties to the IEB.",
        "Restructure the Strike Fund to ensure benefit payments match 100% of a member's base take-home pay from day one."
      ],
      memberMessage: "Leadership that wins the trust of the members shouldn't be afraid to defend its record without using the members' money."
    },
    {
      id: "07",
      title: "Retiree Dignity & Continued Voice",
      icon: HistoryIcon,
      problem: "The giants whose shoulders we stand on are being sidelined. Solidarity is a lifelong bond, yet our retirees often feel disconnected from active leadership and vulnerable to pension erosion. As inflation rises, the fixed incomes of our veterans are being squeezed. We must honor the promises made to those who built this union and ensure they remain an active, voting part of our future strength.",
      commitments: [
        "Negotiate Automatic COLA (Cost of Living Adjustments) for all retiree pensions in every future contract negotiation.",
        "Create a permanent, voting seat on the International Executive Board (IEB) for a Retiree Council Representative.",
        "Launch a National Retiree Mentorship program to connect veteran experience with new-hire organizing and steward training.",
        "Protect and expand surviving spouse benefits to ensure no UAW family is left in poverty after a lifetime of service.",
        "Constitutional protection of retiree chapters to ensure they have the budget and autonomy to organize locally."
      ],
      memberMessage: "Retirees are not the past of this union; they are the conscience and the backbone. We will fight for those who fought for us."
    },
    {
      id: "08",
      title: "Organizing: Growing Our Power",
      icon: Network,
      problem: "Falling union density is the single greatest threat to our collective bargaining power. Every non-union plant is a weapon the boss uses against us at the bargaining table. If we don't organize the new industries—especially the EV and battery sectors in the South—we will lose the leverage required to protect our existing standards.",
      commitments: [
        "Authorize a $100 Million Strategic Organizing Fund specifically targeted at the non-union South and the burgeoning EV sector.",
        "Deploy 'Tiger Teams'—elite, rapid-response organizing units of rank-and-fold members—for new plant drives.",
        "Implement a 'Sector-Wide Solidarity' model to organize the entire supply chain.",
        "Leverage digital-first organizing tools and data analytics to reach workers in tech-manufacturing.",
        "Commitment to 'Card Check' neutrality agreements in all future master contracts with multi-national employers."
      ],
      memberMessage: "Every worker we leave behind is a worker the boss will use against us. We will organize until we win."
    }
  ], []);
  const brandPillars = useMemo(() => [
    {
      title: "Prepared",
      desc: "Preparation is not a strategy — it is a standard. It is how you earn respect in rooms that weren't built for you. Every commitment in this platform flows from the belief that members deserve leaders who did the work before they showed up.",
      quote: "Preparation is the foundation of power"
    },
    {
      title: "Democratic",
      desc: "Member democracy is our governing principle. Bargaining agendas set by members, not presidents. Strike authorizations that require member votes, not press releases. This union belongs to its members.",
      quote: "Your power. Your choice. Your union."
    },
    {
      title: "Accountable",
      desc: "Accountability starts with the person asking for your trust. It means transparency and the integrity to acknowledge failure and fix it. We will replace excuses with action and ensure every leader answers to the membership.",
      quote: "No excuses. Not for yourself. Not for this union."
    }
  ], []);
  return (
    <section id="platform" className="py-16 md:py-24 bg-campaign-tan/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-campaign-black uppercase tracking-tight leading-tight">
              The 2026 Strategic Platform
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4 md:mt-6">
              A Member-First blueprint to restore power, transparency, and results to the membership.
            </p>
          </motion.div>
        </div>
        {/* Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24 items-stretch">
          {brandPillars.map((bp, i) => (
            <motion.div
              key={bp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl border-t-4 border-campaign-gold shadow-xl shadow-campaign-gold/5 flex flex-col h-full hover:shadow-2xl hover:shadow-campaign-gold/10 transition-all group"
            >
              <h3 className="text-xl md:text-2xl font-black text-campaign-black mb-4 uppercase tracking-tighter shrink-0">{bp.title}</h3>
              <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed flex-grow text-sm md:text-base">
                {bp.desc}
              </p>
              <div className="pt-6 border-t border-gray-100 mt-auto shrink-0">
                <p className="text-campaign-gold font-black italic text-base md:text-lg group-hover:scale-105 transition-transform duration-300">"{bp.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Detailed Strategic Pillars */}
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="border-none shadow-2xl overflow-hidden bg-white hover:shadow-campaign-gold/10 transition-all duration-500 rounded-3xl">
                  <div className="flex flex-col lg:flex-row min-h-[450px]">
                    {/* Sidebar Pillar Info */}
                    <div className="lg:w-1/3 bg-campaign-black text-white p-8 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8 lg:mb-10">
                          <span className="text-campaign-gold/20 font-black text-5xl md:text-7xl lg:text-8xl leading-none">
                            {p.id}
                          </span>
                          <div className="bg-campaign-gold/20 p-4 rounded-2xl text-campaign-gold backdrop-blur-sm">
                            <Icon className="w-8 h-8 md:w-10 md:h-10" />
                          </div>
                        </div>
                        <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight mb-6">
                          {p.title}
                        </CardTitle>
                      </div>
                      <div className="pt-6 md:pt-8 border-t border-white/10 relative z-10">
                        <p className="text-base md:text-lg lg:text-xl italic font-medium leading-relaxed text-white/90">
                          "{p.memberMessage}"
                        </p>
                      </div>
                      <Icon className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12 pointer-events-none" />
                    </div>
                    {/* Content Details */}
                    <CardContent className="lg:w-2/3 p-8 md:p-10 lg:p-12 space-y-10 md:space-y-12 flex flex-col justify-center">
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-campaign-gold">The Challenge</h4>
                        <div className="border-l-4 border-campaign-gold bg-campaign-gold/5 p-5 md:p-8 rounded-r-xl shadow-sm transition-colors hover:bg-campaign-gold/[0.08]">
                          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                            {p.problem}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-campaign-black">Strategic Commitments</h4>
                        <ul className="grid gap-3 md:gap-5">
                          {p.commitments.map((commitment, index) => (
                            <li
                              key={`${p.id}-commitment-${index}`}
                              className="flex gap-4 p-3 -mx-3 rounded-xl hover:bg-campaign-tan/10 transition-all duration-300 items-start group border-b border-gray-50 last:border-0 last:pb-0"
                            >
                              <div className="mt-1 bg-campaign-gold/10 p-1.5 rounded-full text-campaign-gold group-hover:bg-campaign-gold group-hover:text-white transition-all shrink-0">
                                <ChevronRight strokeWidth={3} className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                              </div>
                              <span className="text-sm md:text-base lg:text-lg font-medium text-gray-800 leading-relaxed group-hover:text-campaign-black transition-colors text-balance">
                                {commitment}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        {/* Closing Verbatim Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center p-8 md:p-16 bg-campaign-black rounded-[2.5rem] text-white shadow-2xl border-b-[10px] border-campaign-gold relative overflow-hidden"
        >
          <Quote className="absolute top-8 left-8 text-campaign-gold/5 w-24 h-24 md:w-32 md:h-32 rotate-12" />
          <div className="relative z-10 flex flex-col items-center">
            <Quote className="text-campaign-gold mb-6 md:mb-8" size={48} />
            <h3 className="text-xl md:text-3xl lg:text-4xl font-black italic mb-6 md:mb-8 max-w-4xl mx-auto leading-tight md:leading-snug text-balance">
              "We are not just electing a president. We are deciding who we are as a movement!"
            </h3>
            <p className="text-campaign-gold font-black uppercase tracking-[0.3em] text-sm md:text-lg">
              Tricia Geiger
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}