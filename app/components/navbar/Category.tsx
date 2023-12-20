"use client";

import React from "react";
import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";

import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { categories } from "./categories.data";
import { usePathname, useSearchParams } from "next/navigation";
type Props = {};
export default function Category({}: Props) {
  
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) return null;

  return (
    <Container>
      <div className="pt-4 flex flex-row justify-between items-center overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            // description={item.description}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
}
