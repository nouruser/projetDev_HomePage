import React from "react";

import { Button, Img, Text } from "components";

const HomePagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexenddeca items-center justify-start mx-auto py-8 w-full">
        <div className="flex flex-col justify-start mb-5 w-full">
          <div className="flex sm:flex-col flex-row gap-[53px] items-center justify-start md:ml-[0] ml-[720px] md:px-5 w-auto sm:w-full">
            <div className="flex flex-row gap-[35px] items-start justify-start w-auto">
              <Text
                className="text-indigo-400 text-xl w-auto"
                size="txtLexendDecaRegular20"
              >
                Acceuil
              </Text>
              <Text
                className="text-indigo-400 text-xl w-auto"
                size="txtLexendDecaRegular20"
              >
                A propos
              </Text>
              <Text
                className="text-indigo-400 text-xl w-auto"
                size="txtLexendDecaRegular20"
              >
                Contact
              </Text>
            </div>
            <Button className="cursor-pointer leading-[normal] min-w-[133px] text-center text-xl">
              Connexion
            </Button>
          </div>
          <div className="flex flex-col font-justanotherhand items-center justify-start mt-1 w-full">
            <div className="h-[552px] max-w-[1286px] mx-auto md:px-5 relative w-full">
              <Img
                className="h-[552px] m-auto object-cover w-full"
                src="images/img_rectangle1.png"
                alt="rectangleOne"
              />
              <Text
                className="absolute left-[6%] sm:text-4xl md:text-[42px] text-[46px] text-center text-teal-200 top-[33%] uppercase w-[31%] sm:w-full"
                size="txtJustAnotherHandRegular46"
              >
                Soucieux de votre satisfaction
              </Text>
            </div>
            <div className="sm:h-[582px] md:h-[872px] h-[995px] mt-[82px] md:px-5 relative w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col inset-x-[0] items-center justify-end mx-auto p-[86px] md:px-10 sm:px-5 top-[0] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-center mt-[47px] w-[85%] md:w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-[42%] md:w-full"
                    src="images/img_rectangle9.png"
                    alt="rectangleNine"
                  />
                  <div className="flex flex-col gap-[35px] items-start justify-start w-1/2 md:w-full">
                    <div className="flex sm:flex-col flex-row font-inder gap-[34px] items-end justify-start w-[81%] md:w-full">
                      <div className="bg-indigo-400 h-[72px] mb-0.5 w-[3%]"></div>
                      <Text
                        className="sm:mt-0 mt-[29px] text-4xl sm:text-[32px] md:text-[34px] text-blue-900 text-center"
                        size="txtInderRegular36"
                      >
                        Entretien Périodique
                      </Text>
                    </div>
                    <Text
                      className="ml-0.5 md:ml-[0] text-[15px] text-black-900 w-full"
                      size="txtJomolhariRegular15"
                    >
                      Pour garder votre véhicule en parfait état, il est
                      indispensable d’entretenir régulièrement votre Toyota dans
                      nos centres de services agréés.En nous confiant votre
                      véhicule, vous avez l’assurance d’un service approuvé par
                      des experts, des formules adaptées à vos attentes et des
                      produits de qualité certifiés par le constructeur.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-indigo-100 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[118px] md:px-10 sm:px-5 w-full">
                <div className="flex md:flex-col flex-row gap-9 items-start justify-center mt-3.5 w-[93%] md:w-full">
                  <div className="flex flex-col gap-[49px] items-start justify-start w-[57%] md:w-full">
                    <div className="flex sm:flex-col flex-row font-inder gap-9 items-start justify-start w-[90%] md:w-full">
                      <div className="bg-indigo-400 h-[72px] mb-[11px] w-[2%]"></div>
                      <Text
                        className="sm:mt-0 mt-[38px] text-4xl sm:text-[32px] md:text-[34px] text-blue-900 text-center"
                        size="txtInderRegular36"
                      >
                        Maintenance et Réparation{" "}
                      </Text>
                    </div>
                    <Text
                      className="ml-0.5 md:ml-[0] text-[13px] text-black-900"
                      size="txtJomolhariRegular13"
                    >
                      <>
                        Pour garder votre véhicule en parfait état, il est
                        indispensable d’entretenir régulièrement votre Toyota
                        dans nos centres de services agréés.En nous confiant
                        <br /> votre véhicule, vous avez l’assurance d’un
                        service approuvé par des experts, des formules adaptées
                        à vos attentes et des produits de qualité certifiés par
                        le constructeur.
                      </>
                    </Text>
                  </div>
                  <Img
                    className="h-[241px] sm:h-auto md:mt-0 mt-[9px] object-cover w-[41%] md:w-full"
                    src="images/img_rectangle7.png"
                    alt="rectangleSeven"
                  />
                </div>
              </div>
            </div>
            <div className="bg-teal-200 flex flex-col items-center justify-end p-[118px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[70px] items-start justify-start max-w-[960px] mt-[9px] mx-auto w-full">
                <Img
                  className="md:flex-1 h-[255px] sm:h-auto object-cover w-[41%] md:w-full"
                  src="images/img_rectangle8.png"
                  alt="rectangleEight"
                />
                <div className="bg-indigo-400 h-[72px] mb-[183px] w-[1%]"></div>
                <div className="flex flex-col gap-[38px] justify-start md:mt-0 mt-9">
                  <Text
                    className="md:ml-[0] ml-[35px] text-4xl sm:text-[32px] md:text-[34px] text-blue-900"
                    size="txtInderRegular36"
                  >
                    Garantie
                  </Text>
                  <Text
                    className="text-[13px] text-black-900"
                    size="txtJomolhariRegular13"
                  >
                    <>
                      Pour garder votre véhicule en parfait état, il est
                      indispensable d’entretenir régulièrement votre Toyota dans
                      nos centres de services agréés.En nous confiant
                      <br /> votre véhicule, vous avez l’assurance d’un service
                      approuvé par des experts, des formules adaptées à vos
                      attentes et des produits de qualité certifiés par le
                      constructeur.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-inder md:gap-10 items-start justify-between max-w-[1135px] mt-[85px] mx-auto md:px-5 w-full">
              <Text
                className="mb-9 md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 uppercase"
                size="txtInderRegular32"
              >
                <span className="text-indigo-900 font-inriaserif text-left font-normal">
                  venez{" "}
                </span>
                <span className="text-indigo-900 font-inriaserif text-left font-normal">
                  Découvrer
                </span>
                <span className="text-indigo-900 font-inriaserif text-left font-normal">
                  {" "}
                  notre service
                </span>
              </Text>
              <div className="bg-white-A700 flex flex-row gap-[9px] items-center justify-start sm:mt-0 mt-[38px] w-auto">
                <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                  <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                    <div className="flex flex-row gap-[29px] items-start justify-start w-auto">
                      <Img
                        className="h-[38px] md:h-auto object-cover w-10"
                        src="images/img_linkedin.png"
                        alt="linkedin"
                      />
                      <Img
                        className="h-[37px] md:h-auto object-cover w-10"
                        src="images/img_youtube.png"
                        alt="youtube"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[38px] md:h-auto object-cover w-10"
                  src="images/img_facebook.png"
                  alt="facebook"
                />
              </div>
            </div>
            <div className="flex flex-col font-inder items-start justify-start max-w-[1135px] mt-[41px] mx-auto md:px-5 py-2.5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[378px] items-end justify-start w-auto md:w-full">
                <Text
                  className="text-black-900 text-xs w-[137px]"
                  size="txtInderRegular12"
                >
                  groupe1-3gi@gmail.com
                </Text>
                <a
                  href="javascript:"
                  className="text-black-900 text-xs w-[109px]"
                >
                  <Text size="txtInderRegular12">Terms & conditions</Text>
                </a>
                <a
                  href="javascript:"
                  className="text-black-900 text-xs w-[77px]"
                >
                  <Text size="txtInderRegular12">Privacy Policy</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
