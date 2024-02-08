import React from "react";
import state from "../store/index";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components/index";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <img
                src="./festival.png"
                alt="logo"
                className="max-w-xs items-center md:max-w-lg sm:max-w-20"
              />
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-lime-950 text-base">
                Create your unique and exclusive shirt for the Lost In Time
                Festival with our 3D customization tool.{" "}
                <strong>Unleash yoiur imagination</strong>
                {""}
                and get lost in style.
              </p>
              <CustomButton
                type="filled"
                title="Customize Now"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
