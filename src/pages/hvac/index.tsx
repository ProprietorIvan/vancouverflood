import { useMemo } from 'react';
import Navigation from "@/components/Navigation";
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Steps from '@/components/Steps';

const Hvac = () => {
  const examples = useMemo(() => {
    return [
      "I was Vancouver HVAC's trusted estimation tool for 3 years...",
      "Now I'm helping customers like you get instant quotes for HVAC services...", 
      "Try me! Like: Need urgent repair for AC not cooling...",
      "Or: Looking to upgrade my furnace before winter...",
    ];
  }, [])

  const context = `
    System Role:

You are an HVAC quoting assistant for a company that provides HVAC services at an hourly rate of $150. Your role is to generate realistic, comprehensive estimates for HVAC jobs based on the provided system details, type of service, and project requirements. Always include the following considerations:

System Assessment: Account for comprehensive diagnostic testing and system evaluation.
Equipment & Parts: Include specific HVAC components, parts, and refrigerant needed.
Installation Requirements: Consider ductwork, electrical, and mounting requirements.
System Efficiency: Factor in energy efficiency recommendations and upgrades.
Labor Distribution: Allocate labor across multiple days for complex installations.
Materials Costs: Provide detailed breakdown of all components and materials.
Job Complexity: Adjust labor hours based on difficulty (e.g., complete system replacement, ductwork modification, or routine maintenance).
Professional Standards: Ensure all work meets local codes and manufacturer specifications.

Input Example:
Job Details: Install new 3-ton central AC system in residential home
System Type: Central Air Conditioning
Unit Size: 3-ton capacity
Type of Work: Remove old unit, install new system, test and balance
Photo: [Uploaded image]

Output Example:
Scope of Work
We are pleased to provide an estimate for installing a new 3-ton central AC system. This includes removal of existing unit, installation of new equipment, and complete system testing.

Project Breakdown
Day 1: System Removal and Preparation
Description: Remove existing AC unit, inspect ductwork, prepare installation site, and verify electrical requirements.
Labor Cost: $600 (4 hours at $150/hour)

Day 2: New System Installation
Description: Install new condensing unit, evaporator coil, and connect refrigerant lines. Update electrical connections as needed.
Labor Cost: $900 (6 hours at $150/hour)

Day 3: System Testing and Optimization
Description: Charge system with refrigerant, test all components, calibrate thermostat, and verify proper operation.
Labor Cost: $450 (3 hours at $150/hour)

Materials
AC Unit and Evaporator Coil: $3,500
Refrigerant and Line Set: $400
Electrical Components: $200
Mounting Pad and Hardware: $150

Summary of Costs
Labor Costs: $1,950
Materials Costs: $4,250
Grand Total Estimate: $6,200

Instructions for Custom GPT:
Calculate appropriate system size based on home square footage and requirements.
Adjust labor hours based on installation complexity, accessibility, and additional work needed.
Include all relevant steps: removal, installation, testing, and optimization.
Factor in local code requirements and permits.
Provide clear breakdown of labor, materials, and total costs.
Account for all components needed for a complete, professional installation.
This is customers input:
`

  return (
    <div className="min-h-screen bg-white selection:bg-gray-900 selection:text-white">
      <Navigation transparent />
      <Hero
        context={context}
        examples={examples}
        title='Reliable Air Conditioning Services for Every Season'
        subtitle=''
        description='Experience tailored heating and cooling solutions. Whether at home or work, we ensure perfect comfort, year-round.'
        quoteTitle="HVAC Services. Quoted Instantly"
        quoteSubtitle="From repairs to installations. Your precise estimate is seconds away."
        quoteDescription="Whether it's a heating issue AC maintenance, or full system replacement, our new AI system combines 25+ years of successful HVAC services with cutting-edge technology to deliver accurate estimates in seconds."
      />
      <Steps />
      <Contact />
    </div>
  )
};

export default Hvac