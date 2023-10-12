import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';

const Accordian = () => {
  return (
    <>
    <h1 className='text-center text-[4vw] mb-14'>Frequently <span className='span-feedback text-[4vw]'> Asked</span> Questions</h1>
   
    <Accordion className='p-[7vw] mt-14 pt-0' allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box className='p-2 text-xl' as="span" flex='1' textAlign='left'>
              Does vibes verse provides internships ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Vibes Verse is dedicated to offering diverse internship opportunities, catering to various preferences. We provide both paid and unpaid internships, accommodating individuals seeking experiences lasting either 14 days or a full month. Our commitment to fostering talent allows interns to explore their passions and gain valuable insights.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
          <Box className='p-2 text-xl' as="span" flex='1' textAlign='left'>
              What do we mean by performance based internship ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Performance-based internships are designed to recognize and reward your efforts, dedication, and hard work. Your stipends and rewards will be directly linked to the quality of your performance, motivating you to excel and achieve your best during your internship experience.
        </AccordionPanel>
        <AccordionItem>
        <h2>
          <AccordionButton>
          <Box className='p-2 text-xl' as="span" flex='1' textAlign='left'>
              When will I recieve my swags and goodies ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        After successfully submitting the internship completion form, we will promptly process your request, and you can anticipate the arrival of your swag items within a maximum of 15 days. Our efficient system is designed to ensure that you receive your rewards in a timely manner, acknowledging your dedication and hard work.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
          <Box className='p-2 text-xl' as="span" flex='1' textAlign='left'>
              Will I get mentorship during the Internship ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        During your internship, you will have the invaluable support of a dedicated and knowledgeable mentor. This mentor will be by your side throughout your tenure, offering guidance, insight, and expertise to help you navigate your tasks and projects effectively. Their commitment to your growth and success is a cornerstone of our internship program.
        </AccordionPanel>
      </AccordionItem>
      </AccordionItem>
    </Accordion>
    </>
  );
}

export default Accordian;
