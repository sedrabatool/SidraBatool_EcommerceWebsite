"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { add } from '@/app/lib/store/features/cartSlice/cartSlice'; 

export default function Card({ image, name, description, price }) {
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  // Close overlay when clicking anywhere outside the card
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".card-container")) {
        setIsOverlayActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const styles = {
    card: {
      position: "relative",
      overflow: "hidden",
      width: "350px",
      backgroundColor: "#f9f9f9",
      transition: "transform 0.3s ease",
    },
    imageContainer: {
      width: "100%",
      height: "365px",
    },
    details: {
      padding: "16px",
      textAlign: "left",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      margin: "0",
      color: "#3A3A3A",
    },
    description: {
      fontSize: "18px",
      color: "#898989",
      margin: "8px 0",
    },
    price: {
      display: "block",
      marginTop: "10px",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#3A3A3A",
      marginBottom: "15px",
    },
    overlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: isOverlayActive ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      transition: "opacity 0.3s ease",
    },
  };

  const toggleOverlay = (e) => {
    e.stopPropagation(); // Prevent click from propagating to the document
    setIsOverlayActive((prev) => !prev); // Toggle overlay state
  };

  const dispatch = useAppDispatch();

  // handleButtonClick will only dispatch the action without navigating
  const handleButtonClick = (e, name, price) => {
    dispatch(add("hello")); // Dispatch the action with name and price
    console.log(name, price); // Log for debugging
    e.stopPropagation(); // Prevent the button click from closing the overlay
  };

  return (
    <div
      className="card-container"
      style={styles.card}
      onClick={toggleOverlay} // Toggle overlay on image/card click
    >
      {/* Image */}
      <div style={styles.imageContainer}>
        <Image
          src={image}
          alt={name}
          width={350}
          height={365}
          quality={100}
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Overlay */}
      <div style={styles.overlay}>
        <div>
          <Button
            variant="outline"
            size="sm"
            className=" text-[#B88E2F] w-[250px] h-[50px] rounded-none text-lg font-semibold"
            style={{ backgroundColor: "#FFFFFF" }}
            onClick={(e) => handleButtonClick(e, name, price)} // Correctly pass parameters to handleButtonClick
          >
            Add to cart
          </Button>
          <div
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <Button
                variant="outline"
                size="sm"
                className=" text-[#FFFFFF] rounded-none text-lg font-semibold border-none"
                onClick={(e) => handleButtonClick(e, name, price)} // Pass parameters to the handler
              >
                <div className="flex gap-[5px]">
                  <div>
                    <FontAwesomeIcon
                      icon={faShareNodes}
                      style={{ color: "#FFFFFF", fontSize: "26px" }}
                    />
                  </div>
                  <p>Share</p>
                </div>
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                size="sm"
                className=" text-[#FFFFFF] rounded-none text-lg font-semibold border-none"
                onClick={(e) => handleButtonClick(e, name, price)} // Pass parameters to the handler
              >
                <div className="flex gap-[5px]">
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#FFFFFF", fontSize: "26px" }}
                    />
                  </div>
                  <p>Like</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div style={styles.details}>
        <h3 style={styles.title}>{name}</h3>
        <p style={styles.description}>{description}</p>
        <span style={styles.price}>{price}</span>
      </div>
    </div>
  );
}
