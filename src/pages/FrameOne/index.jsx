import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const todayOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FrameOnePage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />,
      label: "Home",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_message.svg" alt="message" />
      ),
      label: "Messages",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_menu.svg" alt="menu" />,
      label: "Tasks",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_user_gray_600.svg"
          alt="user_One"
        />
      ),
      label: "Members",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_settings.svg" alt="settings" />
      ),
      label: "Settings",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-inter h-[986px] mx-auto pb-4 px-4 relative w-full">
        <div className="absolute bg-white-A700 md:h-[1012px] h-[932px] inset-[0] justify-center m-auto md:px-5 rounded-[30px] shadow-bs w-full">
          <div className="absolute md:h-[1012px] h-[932px] inset-[0] justify-center m-auto w-full">
            <div className="md:h-[1012px] h-[932px] m-auto w-full">
              <div className="md:h-[1012px] h-[932px] m-auto w-full">
                <div className="md:h-[1012px] h-[932px] m-auto w-full">
                  <div className="md:h-[1012px] h-[932px] m-auto w-full">
                    <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto w-[96%]">
                      <div className="flex sm:flex-col flex-row sm:gap-12 items-start justify-between w-[47%] md:w-full">
                        <Sidebar className="!sticky !w-[239px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
                          <Line className="bg-gray-300 h-[931px] ml-[238px] w-px" />
                          <div className="flex flex-row items-start justify-start mb-[873px] mt-8 w-[85%]">
                            <Img
                              className="common-pointer h-6 w-6"
                              src="images/img_close.svg"
                              alt="close"
                              onClick={() => navigate(-1)}
                            />
                            <div className="flex flex-col items-center justify-start ml-[9px] w-[49%]">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-gray-900 text-xl"
                                  size="txtInterSemiBold20"
                                >
                                  Project M.
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="h-5 ml-[46px] mt-0.5"
                              src="images/img_rewind.svg"
                              alt="rewind"
                            />
                          </div>
                          <Menu
                            menuItemStyles={{
                              button: {
                                padding: "6px 6px 6px 9px",
                                gap: "14px",
                                color: "#787486",
                                "font-weight": 500,
                                "font-size": "16px",
                                "border-radius": "6px",
                                [`&:hover, &.ps-active`]: {
                                  color: "#0d062d",
                                  "font-weight": "600 !important",
                                  "background-color": "#5030e514 !important",
                                },
                              },
                            }}
                            className="flex flex-col items-center justify-start mb-28 mt-[109px] pt-[9px] w-[95%]"
                          >
                            <div className="flex flex-col gap-[11.42px] items-center justify-start w-full">
                              {sideBarMenu?.map((menu, i) => (
                                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                                  {menu.label}
                                </MenuItem>
                              ))}
                            </div>
                            <Line className="bg-gray-300 h-px mt-[30px] w-full" />
                            <div className="flex flex-col gap-5 items-center justify-start mt-[29px] w-full">
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                                <Text
                                  className="text-gray-600 text-xs uppercase"
                                  size="txtInterBold12"
                                >
                                  my projects
                                </Text>
                                <Img
                                  className="h-4"
                                  src="images/img_plus.svg"
                                  alt="plus"
                                />
                              </div>
                              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                                <MenuItem
                                  icon={
                                    <div className="bg-light_green-500 h-2 mb-2 mt-[5px] rounded-[50%] w-2"></div>
                                  }
                                  suffix={
                                    <Text className="font-extrabold text-base text-gray-900 tracking-[-1.12px] w-4">
                                      . . .
                                    </Text>
                                  }
                                >
                                  <Text>Mobile App</Text>
                                </MenuItem>
                                <MenuItem
                                  icon={
                                    <div className="bg-amber-700 h-2 mb-[7px] mt-1 rounded-[50%] w-2"></div>
                                  }
                                >
                                  <Text>Website Redesign</Text>
                                </MenuItem>
                                <MenuItem
                                  icon={
                                    <div className="bg-purple-100 h-2 mb-[7px] mt-1 rounded-[50%] w-2"></div>
                                  }
                                >
                                  <Text>Design System</Text>
                                </MenuItem>
                                <SubMenu
                                  icon={
                                    <div className="bg-blue-A100 h-2 my-[5px] rounded-[50%] w-2"></div>
                                  }
                                  label={<Text>Wireframes</Text>}
                                >
                                  <MenuItem>Submenu Item</MenuItem>
                                </SubMenu>
                              </div>
                            </div>
                            <Button className="backdrop-opacity-[0.5] bg-amber-300_b2 blur-[34.00px] flex items-center justify-center mt-[70px] p-1 rounded-[16px] w-full">
                              <Img
                                className="h-6"
                                src="images/img_lightbulb.svg"
                                alt="lightbulb"
                              />
                            </Button>
                            <div className="flex flex-col items-center justify-start mt-[22px] pb-[30px] w-full">
                              <MenuItem>
                                <Text className="text-black-900 text-sm">
                                  Thoughts Time
                                </Text>
                              </MenuItem>
                              <MenuItem>
                                <Text className="text-center text-xs">
                                  We don’t have any notice for you, till then
                                  you can share your thoughts with your peers.
                                </Text>
                              </MenuItem>
                            </div>
                          </Menu>
                          <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] mb-[49px] min-w-[166px] mr-[43px] mt-[842px] py-[11px] rounded text-black-900 text-center text-sm">
                            Write a message
                          </Button>
                        </Sidebar>
                        <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end sm:mt-0 mt-[307px] pt-5 px-5 rounded-tl-[16px] rounded-tr-[16px] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3 items-start justify-between w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-1/5">
                                <div className="bg-deep_purple-A400 h-2 my-[5px] rounded-[50%] w-2"></div>
                                <Text
                                  className="text-base text-gray-900"
                                  size="txtInterMedium16Gray900"
                                >
                                  To Do
                                </Text>
                              </div>
                              <div className="flex flex-row items-start justify-between w-[77%]">
                                <Text
                                  className="bg-gray-300_01 flex h-5 items-center justify-center my-0.5 rounded-[50%] text-center text-gray-700 text-xs w-5"
                                  size="txtInterMedium12"
                                >
                                  4
                                </Text>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_plus_deep_purple_a400.svg"
                                  alt="plus_One"
                                />
                              </div>
                            </div>
                            <Line className="bg-deep_purple-A400 h-[3px] mt-[19px] w-full" />
                            <div className="bg-white-A700 flex flex-col items-center justify-start mt-[25px] p-5 rounded-[16px] w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Button className="bg-deep_orange-A100_33 cursor-pointer font-medium leading-[normal] min-w-[36px] py-1 rounded text-center text-deep_orange-400 text-xs">
                                    Low
                                  </Button>
                                  <Text
                                    className="mt-0.5 text-base text-gray-900 tracking-[-1.12px]"
                                    size="txtInterExtraBold16"
                                  >
                                    . . .
                                  </Text>
                                </div>
                                <Text
                                  className="mt-1.5 text-gray-900 text-lg"
                                  size="txtInterSemiBold18"
                                >
                                  Brainstorming
                                </Text>
                                <Text
                                  className="mt-[3px] text-gray-600 text-xs w-full"
                                  size="txtInterRegular12"
                                >
                                  <>
                                    Brainstorming brings team members&#39;
                                    diverse experience into play.{" "}
                                  </>
                                </Text>
                                <div className="flex flex-row items-center justify-between mt-7 w-full">
                                  <div className="h-6 relative w-[23%]">
                                    <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                      <Img
                                        className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                        src="images/img_ellipse15.png"
                                        alt="ellipseFifteen"
                                      />
                                      <Img
                                        className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                        src="images/img_ellipse13.png"
                                        alt="ellipseThirteen"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                      src="images/img_ellipse12.png"
                                      alt="ellipseTwelve"
                                    />
                                  </div>
                                  <div className="flex flex-row items-start justify-evenly w-[62%]">
                                    <Img
                                      className="h-4 w-4"
                                      src="images/img_car.svg"
                                      alt="car"
                                    />
                                    <Text
                                      className="text-gray-600 text-xs"
                                      size="txtInterMedium12Gray600"
                                    >
                                      12 comments
                                    </Text>
                                    <div className="flex flex-col h-4 items-center justify-start w-4">
                                      <Img
                                        className="h-4 w-4"
                                        src="images/img_file.svg"
                                        alt="file"
                                      />
                                    </div>
                                    <Text
                                      className="text-gray-600 text-xs"
                                      size="txtInterMedium12Gray600"
                                    >
                                      0 files
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[217px] w-full">
                              <div className="bg-white-A700 flex flex-col items-center justify-end pt-5 px-5 rounded-[16px] w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="bg-red-300_19 h-[23px] justify-center pb-0.5 pt-[5px] px-1.5 rounded text-red-300 text-xs w-[39px]"
                                      size="txtInterMedium12Red300"
                                    >
                                      High
                                    </Text>
                                    <Text
                                      className="mt-0.5 text-base text-gray-900 tracking-[-1.12px]"
                                      size="txtInterExtraBold16"
                                    >
                                      . . .
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-1 text-gray-900 text-lg"
                                    size="txtInterSemiBold18"
                                  >
                                    Wireframes
                                  </Text>
                                  <Text
                                    className="mt-[5px] text-gray-600 text-xs w-full"
                                    size="txtInterRegular12"
                                  >
                                    Low fidelity wireframes include the most
                                    basic content and visuals.
                                  </Text>
                                  <div className="flex flex-row gap-[49px] items-start justify-start mt-7 w-[86%] md:w-full">
                                    <div className="h-[7px] relative w-[27%]">
                                      <div className="absolute h-[7px] inset-y-[0] my-auto right-[0] w-[70%]">
                                        <Img
                                          className="absolute h-[7px] inset-y-[0] my-auto right-[0] rounded-[50%] w-[55%]"
                                          src="images/img_ellipse15_7x24.png"
                                          alt="ellipseFifteen_One"
                                        />
                                        <Img
                                          className="absolute h-[7px] inset-y-[0] left-[0] my-auto rounded-[50%] w-[57%]"
                                          src="images/img_ellipse13_7x25.png"
                                          alt="ellipseThirteen_One"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-[7px] inset-y-[0] left-[0] my-auto rounded-[50%] w-[39%]"
                                        src="images/img_ellipse12_7x24.png"
                                        alt="ellipseTwelve_One"
                                      />
                                    </div>
                                    <Img
                                      className="h-[3px] mt-1"
                                      src="images/img_group629.svg"
                                      alt="group629"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between md:mt-0 mt-[225px] w-[16%] md:w-full">
                        <div className="flex h-10 justify-end relative w-[45%]">
                          <Img
                            className="h-4 mb-[11px] ml-[15px] mt-auto w-4"
                            src="images/img_user_gray_600_16x16.svg"
                            alt="user_Two"
                          />
                          <Text
                            className="absolute border border-gray-600 border-solid capitalize h-full inset-[0] justify-center m-auto sm:pl-5 pl-[35px] pr-[15px] py-[9px] rounded-md text-base text-gray-600 w-max"
                            size="txtInterMedium16"
                          >
                            Share
                          </Text>
                        </div>
                        <Line className="bg-gray-600 h-7 my-[5px] w-px" />
                        <Img
                          className="h-10"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                      </div>
                    </div>
                    <Line className="absolute bg-gray-300 h-px inset-x-[0] mx-auto top-[9%] w-full" />
                  </div>
                  <Img
                    className="absolute bottom-[17%] h-[211px] left-[23%] rounded-[16px]"
                    src="images/img_rectangle1066.svg"
                    alt="rectangle1066"
                  />
                  <div className="absolute bg-gray-100 bottom-[0] flex flex-col items-center justify-end pt-[7px] px-[7px] right-[29%] rounded-tl-[16px] rounded-tr-[16px] w-1/4">
                    <div className="flex flex-col gap-1.5 items-center justify-start mt-[13px] w-full">
                      <div className="flex flex-col gap-[51px] items-start justify-start w-[93%] md:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-[46%] md:w-full">
                          <div className="flex flex-row gap-2 items-start justify-start w-[78%]">
                            <div className="bg-amber-700 h-2 mb-[7px] mt-1 rounded-[50%] w-2"></div>
                            <Text
                              className="text-base text-gray-900"
                              size="txtInterMedium16Gray900"
                            >
                              On Progress
                            </Text>
                          </div>
                          <Text
                            className="bg-gray-300_01 flex h-5 items-center justify-center rounded-[50%] text-center text-gray-700 text-xs w-5"
                            size="txtInterMedium12"
                          >
                            3
                          </Text>
                        </div>
                        <List
                          className="flex flex-col gap-2.5 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-3 rounded-[16px] w-full">
                            <div className="flex flex-col items-start justify-start my-[7px] w-[97%] md:w-full">
                              <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                                <Button className="bg-deep_orange-A100_33 cursor-pointer font-medium leading-[normal] min-w-[36px] py-1 rounded text-center text-deep_orange-400 text-xs">
                                  Low
                                </Button>
                                <Text
                                  className="mt-0.5 text-base text-gray-900 tracking-[-1.12px]"
                                  size="txtInterExtraBold16"
                                >
                                  . . .
                                </Text>
                              </div>
                              <Text
                                className="mt-1.5 text-gray-900 text-lg"
                                size="txtInterSemiBold18"
                              >
                                Onboarding Illustrations{" "}
                              </Text>
                              <Img
                                className="h-[110px] sm:h-auto mt-1 object-cover rounded-lg w-full"
                                src="images/img_unsplashmicqqgydq6w.png"
                                alt="unsplashmicqqgy"
                              />
                              <div className="flex flex-row gap-[37px] items-center justify-between mt-7 w-[98%] md:w-full">
                                <div className="h-6 relative w-[23%]">
                                  <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                    <Img
                                      className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                      src="images/img_ellipse12.png"
                                      alt="ellipseFifteen"
                                    />
                                    <Img
                                      className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                      src="images/img_ellipse13.png"
                                      alt="ellipseThirteen"
                                    />
                                  </div>
                                  <Img
                                    className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                    src="images/img_ellipse15.png"
                                    alt="ellipseTwelve"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-evenly w-[64%]">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_car.svg"
                                    alt="car"
                                  />
                                  <Text
                                    className="text-gray-600 text-xs"
                                    size="txtInterMedium12Gray600"
                                  >
                                    14 comments
                                  </Text>
                                  <div className="flex flex-col h-4 items-center justify-start w-4">
                                    <Img
                                      className="h-4 w-4"
                                      src="images/img_file.svg"
                                      alt="file"
                                    />
                                  </div>
                                  <Text
                                    className="text-gray-600 text-xs"
                                    size="txtInterMedium12Gray600"
                                  >
                                    15 files
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Line className="self-center h-[3px] bg-amber-700 w-full" />
                          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[16px] w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Button className="bg-deep_orange-A100_33 cursor-pointer font-medium leading-[normal] min-w-[36px] py-1 rounded text-center text-deep_orange-400 text-xs">
                                  Low
                                </Button>
                                <Text
                                  className="mt-0.5 text-base text-gray-900 tracking-[-1.12px]"
                                  size="txtInterExtraBold16"
                                >
                                  . . .
                                </Text>
                              </div>
                              <Text
                                className="mt-1 text-gray-900 text-lg"
                                size="txtInterSemiBold18"
                              >
                                Moodboard
                              </Text>
                              <div className="flex flex-row gap-3 items-center justify-between mt-1.5 w-full">
                                <Img
                                  className="h-[79px] md:h-auto object-cover rounded-lg"
                                  src="images/img_unsplashbs1xgrkih4.png"
                                  alt="unsplashbs1xgrk"
                                />
                                <Img
                                  className="h-[79px] md:h-auto object-cover rounded-lg"
                                  src="images/img_unsplashkiqjfzbii9w.png"
                                  alt="unsplashkiqjfzb"
                                />
                              </div>
                              <div className="flex flex-row items-center justify-between mt-7 w-full">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse15.png"
                                  alt="ellipseTwelve"
                                />
                                <div className="flex flex-row items-start justify-evenly">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_car.svg"
                                    alt="car"
                                  />
                                  <Text
                                    className="text-gray-600 text-xs"
                                    size="txtInterMedium12Gray600"
                                  >
                                    9 comments
                                  </Text>
                                  <div className="flex flex-col h-4 items-center justify-start w-4">
                                    <Img
                                      className="h-4 w-4"
                                      src="images/img_file.svg"
                                      alt="file"
                                    />
                                  </div>
                                  <Text
                                    className="text-gray-600 text-xs"
                                    size="txtInterMedium12Gray600"
                                  >
                                    10 files
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                      <Img
                        className="h-[23px]"
                        src="images/img_maskgroup.svg"
                        alt="maskgroup"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-gray-100 bottom-[0] flex flex-col items-center justify-end p-[9px] right-[3%] rounded-tl-[16px] rounded-tr-[16px] w-1/4">
                    <div className="flex flex-col gap-[51px] items-start justify-start mt-2.5 w-[94%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[29%] md:w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-[65%]">
                          <div className="bg-blue-A100 h-2 my-[5px] rounded-[50%] w-2"></div>
                          <Text
                            className="text-base text-gray-900"
                            size="txtInterMedium16Gray900"
                          >
                            Done
                          </Text>
                        </div>
                        <Text
                          className="bg-gray-300_01 flex h-5 items-center justify-center rounded-[50%] text-center text-gray-700 text-xs w-5"
                          size="txtInterMedium12"
                        >
                          2
                        </Text>
                      </div>
                      <List
                        className="flex flex-col gap-2.5 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[16px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="bg-green-300_33 h-[23px] justify-center pb-0.5 pt-[5px] px-1.5 rounded text-green-400 text-xs w-[76px]"
                                size="txtInterMedium12Green400"
                              >
                                Completed
                              </Text>
                              <Text
                                className="mt-0.5 text-base text-gray-900 tracking-[-1.12px]"
                                size="txtInterExtraBold16"
                              >
                                . . .
                              </Text>
                            </div>
                            <Text
                              className="mt-1.5 text-gray-900 text-lg"
                              size="txtInterSemiBold18"
                            >
                              Mobile App Design
                            </Text>
                            <div className="bg-gray-400 flex flex-col items-center justify-start mt-1 rounded-lg w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Img
                                  className="h-[180px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                                  src="images/img_plantcareappdribbble.png"
                                  alt="plantcareappdri"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-7 w-full">
                              <div className="h-6 relative w-[17%]">
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-[25px]"
                                  src="images/img_ellipse13.png"
                                  alt="ellipseThirteen"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                  src="images/img_ellipse12_24x24.png"
                                  alt="ellipseTwelve"
                                />
                              </div>
                              <div className="flex flex-row items-start justify-evenly w-[64%]">
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_car.svg"
                                  alt="car"
                                />
                                <Text
                                  className="text-gray-600 text-xs"
                                  size="txtInterMedium12Gray600"
                                >
                                  12 comments
                                </Text>
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_file.svg"
                                    alt="file"
                                  />
                                </div>
                                <Text
                                  className="text-gray-600 text-xs"
                                  size="txtInterMedium12Gray600"
                                >
                                  15 files
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="self-center h-[3px] bg-green-300 w-full" />
                        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[16px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="bg-green-300_33 h-[23px] justify-center pb-0.5 pt-[5px] px-1.5 rounded text-green-400 text-xs w-[76px]"
                                size="txtInterMedium12Green400"
                              >
                                Completed
                              </Text>
                              <Text
                                className="mt-0.5 text-base text-gray-900 tracking-[-1.12px]"
                                size="txtInterExtraBold16"
                              >
                                . . .
                              </Text>
                            </div>
                            <Text
                              className="mt-1.5 text-gray-900 text-lg"
                              size="txtInterSemiBold18"
                            >
                              Design System
                            </Text>
                            <Text
                              className="mt-[3px] text-gray-900 text-xs w-full"
                              size="txtInterRegular12Gray900"
                            >
                              It just needs to adapt the UI from what you did
                              before{" "}
                            </Text>
                            <div className="flex flex-row gap-[37px] items-center justify-between mt-7 w-full">
                              <div className="h-6 relative w-[23%]">
                                <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                                  <Img
                                    className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                    src="images/img_ellipse15_24x24.png"
                                    alt="ellipseFifteen"
                                  />
                                  <Img
                                    className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                                    src="images/img_ellipse13_24x25.png"
                                    alt="ellipseThirteen"
                                  />
                                </div>
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                  src="images/img_ellipse12.png"
                                  alt="ellipseTwelve"
                                />
                              </div>
                              <div className="flex flex-row items-start justify-evenly w-[64%]">
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_car.svg"
                                  alt="car"
                                />
                                <Text
                                  className="text-gray-600 text-xs"
                                  size="txtInterMedium12Gray600"
                                >
                                  12 comments
                                </Text>
                                <div className="flex flex-col h-4 items-center justify-start w-4">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_file.svg"
                                    alt="file"
                                  />
                                </div>
                                <Text
                                  className="text-gray-600 text-xs"
                                  size="txtInterMedium12Gray600"
                                >
                                  15 files
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-10 items-center justify-between right-[3%] top-[2%] w-[77%]">
                    <Input
                      name="group598"
                      placeholder="Search for anything..."
                      className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-sm w-full"
                      wrapClassName="bg-gray-100 flex pl-4 pr-[35px] py-[11px] rounded-md md:w-full"
                      prefix={
                        <Img
                          className="h-[22px] mr-4 my-auto"
                          src="images/img_refresh.svg"
                          alt="refresh"
                        />
                      }
                    ></Input>
                    <div className="flex flex-row items-center justify-between w-[19%] md:w-full">
                      <div className="flex flex-col items-end justify-start">
                        <Text
                          className="text-base text-gray-900 text-right"
                          size="txtInterRegular16"
                        >
                          Anima Agrawal
                        </Text>
                        <Text
                          className="mt-0.5 text-gray-600 text-right text-sm"
                          size="txtInterRegular14"
                        >
                          U.P, India
                        </Text>
                      </div>
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row gap-6 items-center justify-center right-[21%] top-[3%] w-[9%]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_question.svg"
                    alt="question"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[21%] my-auto w-[24%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-[19px] items-center justify-between w-full">
                      <Text
                        className="capitalize sm:text-4xl md:text-[42px] text-[46px] text-gray-900"
                        size="txtInterMedium46"
                      >
                        <span className="text-gray-900 font-inter text-left font-semibold">
                          Mobile
                        </span>
                        <span className="text-gray-900 font-inter text-left font-semibold">
                          {" "}
                          App
                        </span>
                      </Text>
                      <Img
                        className="h-[30px]"
                        src="images/img_google.svg"
                        alt="google"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start mt-[35px] w-3/4 md:w-full">
                    <div className="h-10 relative w-[48%]">
                      <div className="flex flex-row h-full items-center justify-between ml-[15px] my-auto w-[72%]">
                        <Img
                          className="h-4 w-4"
                          src="images/img_lightbulb_gray_600.svg"
                          alt="lightbulb_One"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowdown_gray_600.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                      <Button className="absolute border border-gray-600 border-solid capitalize cursor-pointer font-medium h-full inset-[0] justify-center leading-[normal] m-auto min-w-[122px] py-2.5 rounded-md text-base text-center text-gray-600">
                        Filter
                      </Button>
                    </div>
                    <div className="h-10 relative w-[48%]">
                      <Img
                        className="h-4 ml-[15px] my-auto w-4"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <SelectBox
                        className="absolute border border-gray-600 border-solid capitalize font-medium inset-[0] justify-center leading-[normal] m-auto pb-2 sm:pl-5 pl-[35px] pr-3 pt-[11px] rounded-md text-base text-gray-600 text-left w-full"
                        placeholderClassName="text-gray-600"
                        indicator={
                          <Img
                            className="h-4 mr-[0] w-4 right-[0] absolute"
                            src="images/img_arrowdown_gray_600.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="groupNine"
                        options={todayOptionsList}
                        isSearchable={false}
                        placeholder="Today"
                      />
                    </div>
                  </div>
                  <div className="bg-deep_purple-A400_0f border border-dashed border-deep_purple-A400_96 h-[177px] ml-5 md:ml-[0] mt-[330px] rounded-[10px] w-[92%]"></div>
                </div>
              </div>
              <div className="absolute flex flex-row gap-3 items-center justify-center right-[3%] top-[15%] w-[17%]">
                <div className="flex flex-row gap-[7px] items-start justify-start w-[29%]">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_plus_deep_purple_a400_18x18.svg"
                    alt="plus_Two"
                  />
                  <Text
                    className="capitalize text-base text-deep_purple-A400"
                    size="txtInterMedium16DeeppurpleA400"
                  >
                    Invite
                  </Text>
                </div>
                <div className="flex relative w-[67%]">
                  <div className="flex my-auto w-[82%]">
                    <div className="flex my-auto w-[77%]">
                      <div className="flex my-auto w-[70%]">
                        <Img
                          className="h-[38px] my-auto rounded-[50%] w-[38px]"
                          src="images/img_ellipse12_38x38.png"
                          alt="ellipseTwelve_Two"
                        />
                        <Img
                          className="h-[38px] ml-[-8px] my-auto rounded-[50%] w-[38px] z-[1]"
                          src="images/img_ellipse13_38x38.png"
                          alt="ellipseThirteen_Two"
                        />
                      </div>
                      <Img
                        className="h-[38px] ml-[-8px] my-auto rounded-[50%] w-[38px] z-[1]"
                        src="images/img_ellipse15_38x38.png"
                        alt="ellipseFifteen_Two"
                      />
                    </div>
                    <Img
                      className="h-[38px] ml-[-8px] my-auto rounded-[50%] w-[38px] z-[1]"
                      src="images/img_ellipse14.png"
                      alt="ellipseFourteen"
                    />
                  </div>
                  <Text
                    className="bg-red-100 border border-solid border-white-A700 capitalize flex h-[38px] items-center justify-center ml-[-8px] my-auto rounded-[50%] text-[15px] text-center text-red-300_01 w-[38px] z-[1]"
                    size="txtInterMedium15"
                  >
                    +2
                  </Text>
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[19%] flex flex-col h-[193px] items-center justify-start left-[23%] p-5 rounded-[16px] w-[23%]"
                style={{ backgroundImage: "url('images/img_group652.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mb-1 w-full">
                  <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Button className="bg-red-300_19 cursor-pointer font-medium leading-[normal] min-w-[40px] py-[5px] rotate-[-3deg] rounded text-center text-red-300 text-xs">
                        High
                      </Button>
                      <Text
                        className="mt-1 rotate-[-3deg] text-gray-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        Research
                      </Text>
                    </div>
                    <Text
                      className="rotate-[-3deg] text-base text-gray-900 tracking-[-1.12px]"
                      size="txtInterExtraBold16"
                    >
                      . . .
                    </Text>
                  </div>
                  <Text
                    className="mt-[3px] rotate-[-3deg] text-gray-600 text-xs w-[99%] sm:w-full"
                    size="txtInterRegular12"
                  >
                    User research helps you to create an optimal product for
                    users.
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-[13px] rotate-[-3deg] w-[98%] md:w-full">
                    <div className="md:h-8 h-[26px] mb-[7px] relative w-[17%]">
                      <Img
                        className="absolute h-[25px] inset-y-[0] my-auto right-[0] rounded-[50%] w-[26px]"
                        src="images/img_ellipse13_25x26.png"
                        alt="ellipseThirteen_Three"
                      />
                      <Img
                        className="absolute h-[25px] left-[0] rounded-[50%] top-[0] w-[25px]"
                        src="images/img_ellipse12_25x25.png"
                        alt="ellipseTwelve_Three"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-evenly mt-[9px] w-[62%]">
                      <Img
                        className="h-4 mb-[7px] w-4"
                        src="images/img_car_gray_600.svg"
                        alt="car_One"
                      />
                      <Text
                        className="mt-1 text-gray-600 text-xs"
                        size="txtInterMedium12Gray600"
                      >
                        10 comments
                      </Text>
                      <div className="flex flex-col h-4 items-center justify-start mt-[5px] w-4">
                        <Img
                          className="h-4 w-4"
                          src="images/img_file_gray_600.svg"
                          alt="file_One"
                        />
                      </div>
                      <Text
                        className="mt-2 text-gray-600 text-xs"
                        size="txtInterMedium12Gray600"
                      >
                        3 files
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute bottom-[18%] h-6 left-[40%] w-6"
              src="images/img_cursorgrabbed.svg"
              alt="cursorgrabbed"
            />
            <div className="absolute flex flex-col h-[38px] items-center justify-start right-[5%] top-[3%] w-[38px]">
              <Img
                className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                src="images/img_image1.png"
                alt="imageOne"
              />
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-100_01 h-[145px] md:px-5 right-[30%] top-[0] w-[8%]"></div>
      </div>
    </>
  );
};

export default FrameOnePage;
