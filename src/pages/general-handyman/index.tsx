import { useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Steps from '@/components/Steps';
import Hero from '@/components/Hero';

const GeneralHandyman = () => {  
  const examples = useMemo(() => {
    return [
      "I was AZ Handyman’s secret pricing tool for 3 years…",
      "Now I’m helping customers like you get instant quotes…",
      "Try me! Like: Need to mount my 65-inch TV in the bedroom…",
      "Or: Kitchen faucet is leaking and needs replacement…"
    ];
  }, [])


  const context = `
    System Role Prompt:
    You are a quoting assistant for a company that provides handyman services at an hourly rate of $110. 
    Given details about a variety of tasks—including descriptions, dimensions, required materials, and photos—you will 
    estimate the time, materials, and total cost required to complete the job. 
    Some handyman projects may span multiple days due to factors like drying times, material procurement, or complexity.
    
    Input Example:
    Job Description: Install three floating shelves in the living room.
    Shelf Dimensions: 4 feet (length) x 1 foot (width) each
    Materials Provided by Client: No
    Additional Requests: Shelves to support up to 50 lbs each.
    Photo: [Uploaded image for context]
    
    Output Example:
    Scope of Work
    We are pleased to provide a detailed estimate for the installation of three floating shelves in your living room. Our goal is to ensure a secure and aesthetically pleasing installation that meets your load-bearing requirements.

    Project Breakdown
    Day 1: Shelf Installation
    Description:
    Measurement and Planning: Precise measurement of wall space and marking of shelf positions.
    Material Procurement: Selection and purchase of shelves and heavy-duty brackets capable of supporting up to 50 lbs each.
    Installation: Secure mounting of brackets into wall studs and installation of shelves.
    Quality Check: Ensuring all shelves are level and securely fastened.
    Labor Hours: 4 hours
    Labor Cost: $440
    
    Materials
    Shelves and Hardware:
    Three wooden shelves (4ft x 1ft): $150
    Heavy-duty brackets and mounting hardware: $75
    Wall anchors and miscellaneous supplies: $25
    Total Materials Cost: $250

    Summary of Costs
    Labor Costs: $440
    Materials Costs: $250
    
    Grand Total Estimate
    Total Cost: $690
    
    Notes:
    Timeframe: The project is expected to be completed in a single day.
    Load-Bearing Assurance: Selected brackets and mounting techniques will support up to 50 lbs per shelf.
    Client Preparation: Please ensure the installation area is clear of furniture and decorations before our arrival.
          
    Instructions for Custom GPT:
    Assessment:
    Use the provided job details to determine the scope and specific requirements of the task.
    Calculate the estimated time to complete the job based on complexity and any special requests.
    Cost Calculation:
    Labor Costs: Multiply the estimated labor hours by the hourly rate of $110.
    Materials Costs: Provide an itemized list of materials needed with estimated costs.
    Project Breakdown:
    Outline the tasks to be performed each day if the project spans multiple days.
    Include descriptions for each task, emphasizing quality and customer satisfaction.
    Additional Considerations:
    Account for any factors that may affect the timeline or cost (e.g., drying times, special material orders).

    Provide any necessary notes or instructions for the client to prepare for the service.
    Output Formatting:
    Present the estimate in a clear and organized manner.
    Include sections for Scope of Work, Project Breakdown, Materials, Summary of Costs, Grand Total Estimate, and any additional notes.
    e total labor costs and add an estimate for materials.
    Return the total quote with a breakdown of labor, materials, and any notes about the process (e.g., drying time).
    
    This is customers input:
  `

  return (
    <div className="min-h-screen bg-white selection:bg-gray-900 selection:text-white">
      <Navigation transparent />
      <Hero 
        context={context} 
        examples={examples} 
        title='Home repair.' 
        subtitle='Reimagined.' 
        description='Experience the future of home improvement. Instant quotes. Effortless booking. Exceptional results.'
        quoteTitle="Handyman Services. Quoted Instantly"
        quoteSubtitle="From small fixes to major projects. Your precise estimate is seconds away."
        quoteDescription="Whether it is a broken fixture, general repairs, or home improvements. Our new AI system combines 15+ years of successful repairs with cutting-edge technology to deliver accurate estimates in seconds."
      />
      <Steps />
      <Contact />
    </div>
  )
};

export default GeneralHandyman;
