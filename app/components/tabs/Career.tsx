import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Kanit } from "next/font/google";
import type {} from '@mui/lab/themeAugmentation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { TimelineOppositeContent } from '@mui/lab';
import { useLanguage } from '../../context/LanguageContext';
import { usePortfolioData } from '../../hooks/usePortifolioData';

const kanitFont = Kanit({
  weight: ["400", "500", "600"],
  variable: "--kanit-font",
  subsets: ["latin"],
  display: "fallback"
});


const theme = createTheme({
    typography: {
      fontFamily: kanitFont.style.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            html: {
              fontFamily: kanitFont.style.fontFamily,
            },
          },
        },
      },
      MuiTimeline: {
        styleOverrides: {
          root: {
            fontFamily: kanitFont.style.fontFamily,
          },
        },
      },
    },
  });

export default function Career() {
    const { language } = useLanguage();
    const data = usePortfolioData(language);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Timeline para telas grandes */}
            <div className="hidden sm:block">
                <Timeline position="alternate">
                    {data?.career.map((item, index) => {
                        const isFirst = index === 0;
                        return (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent>
                                    {item.time}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot
                                        variant={isFirst ? "outlined" : "filled"} 
                                        sx={{
                                            bgcolor: isFirst ? "transparent" : "#230E64",
                                            borderColor: isFirst ? "#230E64" : undefined,
                                        }}
                                    />
                                    {index !== data.career.length - 1 && (
                                        <TimelineConnector sx={{ bgcolor: "#1D2F96" }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className="bg-white rounded-xl shadow-2xl p-2 mb-5">
                                        <h4 className="text-xl font-bold">{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            </div>

            {/* Timeline horizontal para telas pequenas */}
            <div className="block sm:hidden">
                <div className="flex overflow-x-auto space-x-4 p-4">
                    {data?.career.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-white rounded-xl shadow-lg p-4 min-w-[250px]">
                            <h4 className="text-lg font-bold">{item.title}</h4>
                            <p className="text-sm">{item.time}</p>
                            <p className="mt-2 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ThemeProvider>

    );
}