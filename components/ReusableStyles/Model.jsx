
// import React, { useState, useEffect } from "react";
// import styled, { keyframes } from "styled-components";
// import { MdInfoOutline } from "react-icons/md";
// import { FaArrowLeft } from "react-icons/fa";

// import { Timeline, Tweet } from "react-twitter-widgets";

// import { ethers, BigNumber } from "ethers";

// import { Connection } from "../../../components/Web3Connection/Connection";
// import ConenctToView from "../../../components/ReusableStyles/ConenctToView";

// import {
//   Wrap,
//   Text,
//   ExternalLink,
//   Button,
//   Input,
//   TokenImgTest,
//   OverlayOpacity,
//   CenterScreen,
//   RemoveBtn,
// } from "../../../components/ReusableStyles";
// import Tooltip from "../../../components/ReusableStyles/tooltip";

// const HoverWrap = styled(Wrap)`
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//     opacity: 50%;
//   }
// `;

// const ClickableWrap = styled(Wrap)`
//   display: flex;
//   justify-content: center;
//   border-radius: 0.25rem;
//   height: 3rem;
//   width: 100%;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//     opacity: 50%;
//   }
// `;

// const DisabledButton = styled(Button)`
//   &:hover {
//     cursor: default;
//     opacity: 100%;
//   }
// `;

// const ContinueButton = styled(Button)`
//   height: 3rem;
//   font-size: 0.9rem;
//   width: 100%;
//   height: 3rem;
//   width: 100%;
//   border-radius: 0.325rem;
// `;

// const DisabledContinueButton = styled(ContinueButton)`
//   cursor: disabled;
//   opacity: 50%;

//   &:hover {
//     cursor: disabled;
//     opacity: 50%;
//   }
// `;

// import useSaleFactory from "../../../hooks/NftLaunchpad/useSaleFactory";
// import useBuyoutFixed from "../../../hooks/NftLaunchpad/useBuyoutFixed";
// import useErc721Collection from "../../../hooks/CollectionCreator/useErc721Collection";

// const BuyoutStaticMenu = ({ onClose }) => {
//   const { network } = Connection.useContainer();
//   const { createSale } = useSaleFactory();
//   const { init } = useBuyoutFixed();
//   const { approve } = useErc721Collection();

//   // 0 === Core menu
//   // 1 === Optional menu
//   // 2 === Set Preview Menu
//   const [section, setSection] = useState(0);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);

//   const [tx, setTx] = useState(false);
//   const [saleContract, setSaleContract] = useState("a");
//   // PENDING, SET
//   const [metaStatus, setMetaStatus] = useState("PENDING");
//   const [inited, setInited] = useState(false);
//   const [approved, setApproved] = useState(false);


// return (
//     {showConfirmModal && (
//         <OverlayOpacity>
//         <CenterScreen>
//             <Wrap
//             bgColor="#3e3d3d"
//             borderRadius=".5rem .5rem 0 0"
//             padding="1.5rem"
//             height="auto"
//             width="26rem"
//             >
//             {!approved ? (
//                 <>
//                 <Wrap padding="0" display="flex" justifyContent="center">
//                     <Text fontWeight="500">HOLD UP</Text>
//                 </Wrap>
//                 <Wrap
//                     padding="1.5rem 0 0 0"
//                     display="flex"
//                     justifyContent="center"
//                 >
//                     <Text
//                     fontSize=".9rem"
//                     fontWeight="300"
//                     textAlign="center"
//                     >
//                     You need to allow the NFT Launchpad to mint{" "}
//                     {inputs.totalSupply} NFTs to sell during your
//                     sale. Are you ready to continue?
//                     </Text>
//                 </Wrap>
//                 </>
//             ) : (
//                 <>
//                 <Wrap padding="0" display="flex" justifyContent="center">
//                     <Text fontWeight="500">PULL THE CURTAINS</Text>
//                 </Wrap>
//                 <Wrap
//                     padding="1.5rem 0 0 0"
//                     display="flex"
//                     justifyContent="center"
//                 >
//                     <Text
//                     fontSize=".9rem"
//                     fontWeight="300"
//                     textAlign="center"
//                     >
//                     You are all set! Time to create your sale and show the
//                     metaverse what you have to offer!
//                     </Text>
//                 </Wrap>
//                 </>
//             )}
//             </Wrap>
//             <Wrap
//             bgColor="#252629"
//             borderRadius="0 0 .5rem .5rem"
//             padding="1.5rem"
//             display="flex"
//             justifyContent="center"
//             width="100%"
//             >
//             <Wrap padding="0 .5rem 0 0" width="100%">
//                 <Button
//                 height="3rem"
//                 fontSize="0.9rem"
//                 width="100%"
//                 borderRadius=".325rem"
//                 border="2px solid rgb(75, 75, 75)"
//                 bgColor="rgb(75, 75, 75)"
//                 onClick={() => setShowModal(false, false)}
//                 >
//                 Cancel
//                 </Button>
//             </Wrap>

//             <Wrap padding="0 0 0 .5rem " width="100%">
//                 {approved ? (
//                 <Button
//                     height="3rem"
//                     fontSize="0.9rem"
//                     width="100%"
//                     borderRadius=".325rem"
//                     onClick={() => setShowModal(true, false)}
//                 >
//                     Create Sale
//                 </Button>
//                 ) : (
//                 <Button
//                     height="3rem"
//                     fontSize="0.9rem"
//                     width="100%"
//                     borderRadius=".325rem"
//                     width="100%"
//                     onClick={() => setApproved(true)}
//                 >
//                     Allow Minting
//                 </Button>
//                 )}
//             </Wrap>
//             </Wrap>
//         </CenterScreen>
//         </OverlayOpacity>
//     )}
// )
//                 }
