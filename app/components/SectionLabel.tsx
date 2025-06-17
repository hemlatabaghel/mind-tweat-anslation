// type SectionLabelProps = {
//   title: string;
// };

// export default function SectionLabel({ title }: SectionLabelProps) {
//   return (
//     <div >
//       <div className="w-full bg-lime-200 py-1  p-8">
//         <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800 font-serif">
//           {title}
//         </h2>
//       </div>
//     </div>
//   );
// }

import { Box, Typography } from '@mui/material';

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#E9FF97',
          py: 1,
          px: 3,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'grey.800',
            fontFamily: 'serif',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
