import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  {
    title: "14 Feb",
    description: "SSBD: Poetry Speakeasy",
    url: "https://aucklandpride.org.nz/shows/ssbd-poetry-speakeasy/",
  },
  {
    title: "15 Feb",
    description: "bad apple Showcase",
    url: "https://aucklandpride.org.nz/shows/ssbd-poetry-speakeasy/",
  },
  {
    title: "17 Feb",
    description: "SSBD: Rage on the Page",
    url: "https://aucklandpride.org.nz/shows/ssbd-poetry-speakeasy/",
  },
  {
    title: "5 May",
    description: "Auckland Art Gallery: On Being Chinese",
    url: "https://aucklandpride.org.nz/shows/ssbd-poetry-speakeasy/",
  },
  {
    title: "30 Jul to 3 Aug",
    description: "A Short History of Asian New Zealand Theatre",
    url: "https://aucklandpride.org.nz/shows/ssbd-poetry-speakeasy/",
  },
];

export function Steps() {
  const { activeStep } = useSteps({
    index: 4,
    count: steps.length,
  });

  return (
    <Stepper
      size="sm"
      index={activeStep}
      orientation="vertical"
      height="220px"
      gap="0"
      colorScheme="zRed"
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>
              <a href={step.url}>{step.description}</a>
            </StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
