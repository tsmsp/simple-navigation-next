// FAQScreen.js
// @ts-ignore
import Footer from "../../components/patterns/Footer";
// @ts-ignore
import Link from "../../components/Link";
import { theme } from "../../theme/theme";
import { Box, Text, Image } from "../../theme/components";

const LOGO = "/images/logo.png";

export default function FAQScreen({ faq }) {
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral["050"],
      }}
    >
      <Image
        styleSheet={{
          width: theme.space.x40,
          height: "auto",
        }}
        src={LOGO}
        alt="Logo"
      />
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          maxWidth: theme.space.xcontainer_xl,
          marginHorizontal: "auto",
          paddingHorizontal: {
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
          paddingVertical: {
            xs: theme.space.x16,
            lg: theme.space.x20,
          },
        }}
      >
        <Box
          styleSheet={{
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(3,minmax(0,1fr))",
            },
            gap: {
              lg: theme.space.x8,
            },
          }}
        >
          <Box>
            <Text
              as="h2"
              styleSheet={{
                textVariant: theme.typography.variants.heading2,
                color: theme.colors.primary[900],
              }}
            >
              FAQ: Frequently Asked Questions
            </Text>
            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              Can't find the answer you're looking for? Contact our{" "}
              <Link
                href="mailto:info@supperpper.com"
                styleSheet={{
                  color: theme.colors.primary[400],
                  hover: {
                    color: theme.colors.primary[600],
                  },
                }}
              >
                customer support team
              </Link>
            </Text>

            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              <Link
                href="/"
                styleSheet={{
                  color: theme.colors.primary[400],
                  fontWeight: "500",
                  hover: {
                    color: theme.colors.primary[300],
                  },
                }}
              >
                Back to Home
              </Link>
            </Text>
          </Box>
          <Box
            styleSheet={{
              marginTop: {
                xs: theme.space.x12,
                lg: theme.space.x0,
              },
              gridColumn: {
                lg: "span 2 / span 2;",
              },
            }}
          >
            {faq.length === 0 && (
              <Box
                styleSheet={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderTop: {
                    xs: `${theme.space.xpx} solid ${theme.colors.neutral["200"]}`,
                    sm: "none",
                  },
                  paddingTop: {
                    xs: theme.space.x6,
                    sm: 0,
                  },
                  borderLeft: {
                    sm: `${theme.space.xpx} solid ${theme.colors.neutral["200"]}`,
                  },
                  paddingLeft: {
                    sm: theme.space.x6,
                  },
                  textAlign: "center",
                  minHeight: theme.space["x1/1"],
                }}
              >
                <Text
                  as="h1"
                  styleSheet={{
                    textVariant: theme.typography.variants.heading1,
                  }}
                >
                  Nada por aqui
                </Text>
                <Text
                  as="p"
                  styleSheet={{
                    marginTop: theme.space.x1,
                    textVariant: theme.typography.variants.body1,
                    color: theme.colors.primary[900],
                  }}
                >
                  Talvez ainda não existam dúvidas frequentes.
                </Text>
              </Box>
            )}
            <Box as="dl">
              {faq.map((faq) => (
                <Box
                  key={faq.question}
                  stylesheet={{
                    marginTop: theme.space.x0,
                    color: theme.colors.primary[200],
                  }}
                >
                  <Text
                    as="dt"
                    styleSheet={{
                      marginTop: theme.space.x12,
                      textVariant: theme.typography.variants.heading4,
                      color: theme.colors.primary[900],
                    }}
                  >
                    {faq.question}
                  </Text>
                  <Text
                    as="dd"
                    styleSheet={{
                      marginTop: theme.space.x3,
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.primary[200],
                    }}
                  >
                    {faq.answer}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

FAQScreen.defaultProps = {
  faqs: [],
};
