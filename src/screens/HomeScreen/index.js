// @ts-nocheck

import Footer from "../../components/patterns/Footer";

import Link from "../../components/Link";
import { theme } from "../../theme/theme";
import { Image, Box, Text, Icon, Input, Button } from "../../theme/components";

const LOGO = "/images/logo.png";
const SIDE_IMAGE_URL = "/images/pizza.jpeg";

function SideImage() {
  return (
    <Box
      styleSheet={{
        paddingHorizontal: {
          md: theme.space.x8,
        },
        marginHorizontal: {
          sm: "auto",
        },
        maxWidth: {
          sm: theme.space.xcontainer_md,
        },
      }}
    >
      <Box
        styleSheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x0,
          },
          width: {
            lg: theme.space["x1/2"],
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16,
          },
          paddingBottom: {
            lg: theme.space.x16,
          },
          position: {
            sm: "relative",
            lg: "absolute",
          },
        }}
      >
        <Box
          styleSheet={{
            height: {
              lg: theme.space["x1/1"],
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: "none",
            },
            position: "relative",
            paddingHorizontal: {
              sm: theme.space.x0,
            },
            paddingLeft: {
              lg: theme.space.x12,
            },
            marginRight: {
              lg: `-${theme.space.x40}`,
            },
            marginHorizontal: {
              sm: "auto",
            },
          }}
        >
          <Image
            styleSheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4,
              },
              maxWidth: {
                lg: "none",
              },
              width: {
                lg: "auto",
              },
              height: {
                lg: theme.space["x1/1"],
              },
            }}
            src={SIDE_IMAGE_URL}
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
}

export default function HomeScreen() {
  return (
    <Box>
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral["050"],
        }}
      >
        <Box
          styleSheet={{
            overflow: "hidden",
            position: {
              lg: "relative",
            },
            paddingTop: {
              xs: theme.space.x6,
              sm: theme.space.x12,
            },
            paddingVertical: {
              md: theme.space.x20,
              lg: theme.space.x24,
            },
          }}
        >
          <Box
            styleSheet={{
              marginHorizontal: "auto",
              paddingHorizontal: {
                xs: theme.space.x4,
                sm: theme.space.x6,
                lg: theme.space.x8,
              },
              maxWidth: {
                sm: theme.space.xcontainer_md,
                lg: theme.space.xcontainer_lg,
              },
              display: {
                lg: "grid",
              },
              gap: {
                lg: theme.space.x24,
              },
              gridTemplateColumns: {
                lg: "repeat(2, minmax(0, 1fr))",
              },
            }}
          >
            <Box>
              <Box>
                <Image
                  styleSheet={{
                    width: theme.space.x40,
                    height: "auto",
                  }}
                  src={LOGO}
                  alt="Logo"
                />
              </Box>
              <Box
                styleSheet={{
                  marginTop: {
                    xs: theme.space.x16,
                    sm: theme.space.x20,
                  },
                }}
              >
                <Box>
                  <Link
                    href="/faq"
                    styleSheet={{
                      display: "inline-flex",
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                    }}
                  >
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        backgroundColor: theme.colors.primary["100"],
                        paddingHorizontal: theme.space["x2.5"],
                        paddingVertical: theme.space["x1"],
                        marginRight: theme.space.x2,
                        marginBottom: {
                          xs: theme.space.x2,
                          sm: theme.space.x0,
                        },
                      }}
                    >
                      O que tem de novo?
                    </Text>
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        display: "inline-flex",
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        alignItems: "center",
                      }}
                    >
                      <Text>Confira as principais dúvidas</Text>
                      <Icon
                        styleSheet={{
                          iconVariant: "chevronRight",
                          marginLeft: theme.space.xpx,
                        }}
                        aria-hidden="true"
                      />
                    </Text>
                  </Link>
                </Box>
                <Box
                  styleSheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm,
                  }}
                >
                  <Text
                    as="h1"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading1,
                      color: theme.colors.neutral["900"],
                    }}
                  >
                    Super Pepper
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.primary["200"],
                      marginTop: theme.space.x6,
                    }}
                  >
                    <Text
                      as="p"
                      styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral["500"],
                        marginTop: theme.space.x6,
                      }}
                    >
                      Welcome to Super Pepper, the ultimate pizza destination!
                    </Text>
                    <br></br>
                    At Super Pepper, we are passionate about creating
                    extraordinary pizza experiences. Our restaurant is dedicated
                    to serving you the most delicious and mouthwatering pizzas
                    you've ever tasted.
                    <br></br>
                    <br></br>
                    We take pride in handcrafting each pizza with the finest
                    ingredients, expertly blending flavors that will leave you
                    craving for more. With a diverse menu that caters to all
                    taste buds, we offer a wide range of pizza options to
                    satisfy every pizza lover.
                    <br></br>
                    <br></br>
                    From classic Margherita and Pepperoni to gourmet creations
                    like BBQ Chicken and Truffle Mushroom, our pizzas are made
                    to impress. We carefully select premium cheeses, fresh
                    vegetables, and savory meats to ensure every bite is a burst
                    of delightful flavors.
                    <br></br>
                    <br></br>
                    At Super Pepper, we prioritize quality and freshness. Our
                    skilled chefs meticulously prepare each pizza, baking them
                    to perfection in our traditional wood-fired ovens.
                    <br></br>
                    <br></br>
                    The result is a crispy yet tender crust, topped with a
                    harmonious combination of toppings that will make your taste
                    buds dance. Whether you're dining in with friends and family
                    or enjoying a cozy night at home, Super Pepper offers a warm
                    and inviting atmosphere.
                    <br></br>
                    <br></br>
                    Our friendly staff is dedicated to providing exceptional
                    service, ensuring that your pizza experience is nothing
                    short of extraordinary. Come and indulge in the tantalizing
                    flavors of our pizzas at Super Pepper.
                    <br></br>
                    <br></br>
                    We guarantee a memorable dining experience that will have
                    you coming back for more. Join us today and let us take you
                    on a flavorful journey that celebrates the art of
                    pizza-making.
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral["500"],
                      marginTop: theme.space.x6,
                    }}
                  >
                    Quer testar antes de todo mundo?
                  </Text>
                </Box>
                <Box
                  as="form"
                  action="#"
                  styleSheet={{
                    display: {
                      sm: "flex",
                    },
                    marginTop: theme.space.x12,
                    width: {
                      sm: theme.space["x1/1"],
                    },
                    maxWidth: {
                      sm: theme.space.xcontainer_lg,
                    },
                  }}
                >
                  <Box
                    styleSheet={{
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <Text
                      as="label"
                      htmlFor="email"
                      styleSheet={{
                        srOnly: true,
                      }}
                    >
                      Email address
                    </Text>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email here."
                    />
                  </Box>
                  <Box
                    styleSheet={{
                      marginTop: {
                        xs: theme.space.x4,
                        sm: theme.space.x0,
                      },
                      marginLeft: {
                        sm: theme.space.x3,
                      },
                    }}
                  >
                    <Button
                      type="submit"
                      // button variant
                    >
                      Register
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <SideImage />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
