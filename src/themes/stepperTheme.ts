// stepperTheme.ts
import { extendTheme } from "@chakra-ui/react";

const baseStyle = {
  container: {  // Check if your component structure allows for this container styling
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',  // This will center everything which can be adjusted further if needed
  },
  indicator: {
    borderRadius: 0,
    boxSize: '16px',  // Size of the checkbox
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '19px',  // Add more margin top to push the checkbox down
  },
  // seperator: {
  //   height: 'calc(100% - 8px)',  // Adjusting the connector height to match the new checkbox position
  //   position: 'absolute',
  //   top: '50%',
  //   transform: 'translateY(-50%)',
  // },
  title: {
    fontSize: '11px',
    fontWeight: 'normal',
    marginBottom: '-2px',
    order: 1,  // Ensure title is above description if not reordering in component
  },
  description: {
    fontSize: 'md',
    order: 2,
    // marginBottom: '5px'  // Ensure description is below title
  },
};

export const stepperTheme = {
  baseStyle,
};

const theme = extendTheme({
  components: {
    Stepper: stepperTheme,
  },
});
