import { useEffect, useRef, useState } from 'react'
import drone from "../assets/images/ig-drones.jpg"
import TQ from "../assets/images/TQ.png"
import start from "../assets/images/start.jpg"
import algo from "../assets/images/Algo-Rythm.png"
import anu from "../assets/images/anu.jpg"
import arsh from "../assets/images/arsh.jpg"
import art from "../assets/images/art.png"
import beta from "../assets/images/beta.png"
import booth from "../assets/images/booth.webp"
import dj from "../assets/images/dj.jpeg"
import fifa from "../assets/images/fifa.webp"
import hacks from "../assets/images/hacks.jpg"

interface PathPoint {
  x: number
  y: number
}

const imageSources = [
  drone, algo, anu, arsh, art, beta, booth, dj, fifa, hacks, TQ, TQ, TQ, TQ, start
]

const imageDescriptions = [
  "Drone soaring high above cityscape, capturing breathtaking aerial views of urban landscape. Innovative technology meets photography, providing unique perspectives and insights into modern metropolitan areas. Exploring new heights in visual storytelling.",
  "Complex algorithm visualization displayed on screen, showcasing intricate data structures and computational processes. Colorful nodes and edges represent interconnected elements, illustrating the beauty and complexity of modern problem-solving techniques in computer science.",
  "Portrait of Anu, showcasing warm smile and vibrant personality. Captured in natural light, highlighting unique features and character. Represents diversity and individuality within our community, inspiring connection and understanding among team members.",
  "Candid snapshot of Arsh in action, demonstrating passion and dedication to craft. Caught mid-gesture, conveying energy and enthusiasm for the task at hand. Exemplifies the spirit of collaboration and innovation driving our collective efforts.",
  "Stunning artistic creation blending various mediums and techniques. Vibrant colors and intricate details captivate the viewer's imagination. Represents the intersection of creativity and technology, pushing boundaries of traditional and digital art forms.",
  "Beta testing phase in progress, with team members collaborating on software evaluation. Multiple screens display various aspects of the application under scrutiny. Highlights the importance of thorough testing and quality assurance in product development.",
  "Bustling event booth attracting curious attendees and potential clients. Eye-catching displays and interactive demonstrations showcase latest innovations. Represents our presence and impact at industry conferences and networking opportunities.",
  "Energetic DJ spinning tracks, creating an electrifying atmosphere for the crowd. State-of-the-art equipment and lighting effects enhance the immersive experience. Showcases the power of music and technology in bringing people together.",
  "Intense FIFA gaming moment captured during esports tournament. Players fully engaged, showcasing skills and strategic thinking in virtual football match. Highlights the growing popularity and competitiveness of electronic sports in modern entertainment.",
  "Hackathon in full swing, with diverse group of participants collaborating intensely. Whiteboards filled with ideas and laptops displaying lines of code. Embodies the spirit of innovation, teamwork, and rapid problem-solving in tech community.",
  "TQ logo prominently displayed, representing our brand identity and values. Clean lines and modern design convey professionalism and innovation. Serves as a visual anchor for our company's mission and vision in tech industry.",
  "TQ emblem showcased in various applications and contexts. Versatile design adapts seamlessly to different mediums and scales. Reinforces brand recognition and consistency across multiple platforms and products.",
  "TQ symbol integrated into product packaging and marketing materials. Sleek and minimalist approach enhances visual appeal and memorability. Demonstrates the importance of cohesive branding in building strong market presence.",
  "TQ icon featured in digital interfaces and mobile applications. Recognizable even at small sizes, ensuring consistent user experience. Highlights our commitment to user-centric design and seamless integration of branding.",
  "Starting line of an exciting journey or competition. Anticipation and energy palpable as participants prepare to begin. Symbolizes new beginnings, opportunities, and the thrill of embarking on challenging endeavors."
]

const SCALE_FACTOR = 1.8

export default function FlowingPathScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState<number>(0)
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const [pathPoints, setPathPoints] = useState<PathPoint[]>([])

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      setPathLength(length)
      pathRef.current.style.strokeDasharray = `${length} ${length}`
      pathRef.current.style.strokeDashoffset = `${length}`

      const points: PathPoint[] = []
      for (let i = 2; i <= 15; i++) {
        const point = pathRef.current.getPointAtLength((i / 15) * length)
        points.push({ x: point.x * SCALE_FACTOR, y: point.y * SCALE_FACTOR })
      }
      setPathPoints(points)
    }

    const handleResize = () => {
      if (containerRef.current && contentRef.current && svgRef.current) {
        const svgWidth = svgRef.current.width.baseVal.value
        const svgHeight = svgRef.current.height.baseVal.value
        const containerWidth = window.innerWidth
        const containerHeight = window.innerHeight

        const horizontalScrollDistance = svgWidth - containerWidth
        const verticalScrollDistance = Math.max(0, svgHeight - containerHeight)

        containerRef.current.style.height = `${horizontalScrollDistance + verticalScrollDistance + containerHeight}px`
        contentRef.current.style.width = `${svgWidth}px`
        contentRef.current.style.height = `${svgHeight + containerHeight}px`
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && contentRef.current && svgRef.current && pathRef.current) {
        const scrollY = window.scrollY
        const containerHeight = containerRef.current.scrollHeight - window.innerHeight
        const svgWidth = svgRef.current.width.baseVal.value
        const viewportWidth = window.innerWidth

        const progress = (scrollY / containerHeight) * 105
        setScrollProgress(Math.min(progress, 105))

        const horizontalScroll = Math.min(scrollY, svgWidth - viewportWidth)

        contentRef.current.style.transform = `translateX(-${horizontalScroll}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative bg-[#141414]">
      <h1 className="fixed top-4 left-1/2 transform -translate-x-1/2 text-4xl font-bold font-[AdieuRegular] text-white z-50">
        Memories
      </h1>
      <div
        ref={contentRef}
        className="fixed top-0 left-0 overflow-hidden transition-transform duration-100 ease-linear"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {pathPoints.map((point, index) => {
            const appearThreshold = (index / pathPoints.length) * pathLength
            const visibilityProgress = Math.max(0, Math.min(1, (scrollProgress * pathLength - appearThreshold) / (pathLength * 0.05)))
            const imageIndex = index % imageSources.length

            return (
              <div className="absolute top-0 left-0 w-full h-full">
          {pathPoints.map((point, index) => {
            const appearThreshold = (index / pathPoints.length) * pathLength
            const visibilityProgress = Math.max(0, Math.min(1, (scrollProgress * pathLength - appearThreshold) / (pathLength * 0.05)))
            const imageIndex = index % imageSources.length

            return (
              <div
                key={`image-${index}`}
                className="absolute transition-all duration-300"
                style={{
                  left: `${point.x}px`,
                  top: `${point.y + 40 * SCALE_FACTOR}px`,
                  opacity: visibilityProgress,
                  transform: `translate(-50%, -50%) scale(${1 + visibilityProgress})`,
                  zIndex: 20,
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 overflow-hidden rounded-lg bg-primary mb-2">
                    <img
                      src={imageSources[imageIndex]}
                      alt={`Path point ${index + 1}`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-black bg-opacity-75 p-1 rounded-md max-w-[128px]">
                    <p className="text-white text-[8px] leading-tight">
                      {imageDescriptions[imageIndex].split(' ').slice(0, 15).join(' ') + '...'}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
            )
          })}
        </div>
        <svg
          ref={svgRef}
          width={8263 * SCALE_FACTOR}
          height={585 * SCALE_FACTOR}
          viewBox={`0 0 ${7963 * SCALE_FACTOR} ${585 * SCALE_FACTOR}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto relative"
          style={{ zIndex: 10 }}
        >
          <g clipPath="url(#clip0_1_2)">
            <rect width={7963 * SCALE_FACTOR} height={385 * SCALE_FACTOR} fill="#141414"/>
            <path
              ref={pathRef}
              d="M95.5 133C95.5 133 110.89 190.191 96.5 221.185C90 235.185 83.0272 246.11 68 247.185V247.185C46.0614 248.753 39.4074 215.711 52.5598 198.082C53.1912 197.236 53.8382 196.433 54.5 195.685C55.1673 194.93 55.8798 194.196 56.6322 193.483C83.8083 167.73 132.145 168.445 161.5 191.685V191.685C173.5 201.185 195.194 217.436 216 219.185V219.185C249.305 221.984 266.576 181.617 294.685 163.535C297.01 162.039 299.451 160.884 302 160.185C304.582 159.476 307.333 159.218 310.171 159.308C341.669 160.31 363.03 190.089 385.5 212.185V212.185C395.4 221.92 409.183 233.486 419.999 242.244C431.142 251.268 444.125 257.896 457.82 262.146V262.146C481.865 269.608 507.85 269.434 531.752 261.526L538.045 259.444C553.427 254.355 567.256 245.426 578.223 233.5L596.798 213.303C606.91 202.307 621.878 197.139 636.621 199.554V199.554C644.4 200.828 651.698 204.152 657.766 209.184L680.566 228.092C712.489 254.564 760.475 288.494 793.626 263.577C794.084 263.233 794.542 262.874 795 262.5C802.823 256.114 806.044 250.984 811 242.185V242.185C821.141 224.178 819.521 202.214 816.629 181.751L815.379 172.907C814.793 168.759 814.063 164.641 813.581 160.48C812.414 150.415 811.562 130.791 821 122.185C833.318 110.952 848.696 110.52 863.5 118.185C866.796 119.891 869.634 122.649 872.062 125.942C885.823 144.605 880.521 172.211 893.429 191.474C894.49 193.057 895.675 194.483 897 195.685C902.652 200.811 911.738 202.66 920.31 203.093C934.519 203.81 946.885 194.932 954.633 183V183C962.809 170.409 976.028 161.966 990.889 159.843L991.459 159.762C998.741 158.722 1006.16 159.201 1013.25 161.17L1016.73 162.137C1036.29 167.57 1052.84 181.061 1060.24 199.963C1062.87 206.672 1065.33 213.612 1067 219.685V219.685C1073.87 244.748 1089.24 270.439 1115.18 271.938C1115.99 271.984 1116.76 272.006 1117.5 272C1130.18 271.903 1144.1 265.577 1154.95 259.19C1168.27 251.346 1179.55 240.599 1190.25 229.446C1195.4 224.083 1200.83 218.288 1205 213.5C1210.39 207.314 1216.24 199.635 1221.42 192.495C1231.65 178.385 1244.4 166.179 1259.54 157.54V157.54C1267.15 153.196 1275.23 149.587 1283.87 148.097C1287.94 147.394 1292.33 146.875 1296 147V147C1309.37 147.455 1320.05 157.672 1325.69 169.803C1329.42 177.817 1333.44 187.022 1336 194.5C1337 197.433 1337.93 200.6 1338.78 203.881C1346.28 232.797 1354.61 269.336 1384 274.685V274.685C1400.6 277.705 1424.51 265.11 1430.23 261.909C1431.08 261.434 1431.92 260.93 1432.75 260.422V260.422C1448.19 250.966  1462.42 239.652 1475.11 226.734L1484 217.685L1487.56 214.122C1496.82  204.861 1507.12 196.701 1518.25 189.802L1522.01 187.472C1531.96  181.306 1542.67 176.45 1553.86 173.024V173.024C1574.97 166.562 1597.33 165.333 1619.03 169.446L1632.5 172V172C1660.7 179.335 1686.68 193.621 1707.4 214.108C1708.3 214.99 1709.16 215.851 1710 216.685C1711.68 218.359 1713.5 220.181 1715.37 222.069C1730.79 237.623 1747.79 252.347 1768.5 259.5V259.5C1775.68 261.98 1786.33 262.621 1795.82 262.582C1809.73 262.524 1822.94 257.24 1834.24 249.137V249.137C1840.38 244.734 1845.87 239.488 1850.55 233.552L1859.5 222.185L1860.08 221.36C1869.4 208.135 1885.36 198.482 1900.5 204.185V204.185C1911.73 208.413 1921.63 220.081 1928.78 230.794C1937.6 244.02 1944.33 260.558 1959 266.685V266.685C1966.64 269.877 1971.72 269.607 1980 269.685C1988.86 269.767 1993.81 268.449 2002.5 266.685C2004.03 266.373 2005.66 265.994 2007.33 265.569C2023.81 261.378 2041.72 263.959 2054.84 274.776V274.776C2069.57 286.912 2089.99 288.96 2106.91 280.146L2116.32 275.247C2123.38 271.572 2129.63 266.55 2135.33 261.001C2142.39 254.13 2152.88 245.068 2162.5 241.185C2179.36 234.38 2192 238.315 2207.91 240.277C2216.45 241.331 2224.62 237.249 2229.96 230.5V230.5C2233.56 225.945 2235.64 220.387 2236.41 214.628C2237.81 204.134 2241.21 186.851 2249  177C2255.45 168.844 2259.66 163.381 2269.5 160C2270.67 159.596 2271.96 159.297 2273.3 159.083C2286.5 156.974 2298.29 166.083 2306 177V177L2309.29 182.27C2315.19 191.706 2324.58 198.43 2335.41 200.979V200.979C2341.07 202.312 2347 202.596 2352.54 200.805C2355.51 199.844 2358.68 198.573 2361 197C2361.85 196.426 2362.66 195.758 2363.44 195.015C2377.14 181.973 2376.5 160.417 2376.5 141.5V141.5V141.5C2376.5 124.197 2376.12 105.879  2385.15 91.1176C2387.18 87.804 2389.61 84.8954 2392.5 83C2400.7 77.6213 2407.22 76.8057 2417 77.5C2422.4 77.8832 2428.49 80.5204 2433.73 83.443C2442.61 88.3999 2449.09 96.5309 2454.14 105.365V105.365C2457.04 110.441 2459.32 115.841 2461.57 121.235C2463.35 125.507 2465.78 130.54  2468.5 134C2475.13 142.449 2481.02  145.459 2490.5 150.5C2494.32 152.532 2499.2 154.342 2503.85 155.822C2514.14 159.095 2524.7 161.497 2535.21 163.945C2541.95 165.512 2549.69 167.143 2556 168C2565.1 169.237 2577.43 169.709 2585.66 169.889C2591.55 170.018 2597.42 169.497 2603.22 168.496L2607.91 167.688C2618.2 165.913 2628.35 162.533 2636.5 156V156C2638.06 154.751 2639.75 153.244 2641.42 151.68C2648.37 145.176 2653.86 137.314 2658.5 129V129C2660.72 125.01 2663.3 120.347 2665.83 115.763C2673.58 101.702 2682.53 84.6215 2698.5 83V83C2708.82 81.9521 2715.94 84.8903 2723.5 92V92C2736.01 103.769 2731.52 124.109 2729.69 141.187C2727.97 157.173 2727.68 177.317 2734 191.5C2735.47 194.801 2737.53 198.302 2739.83 201.73C2750.09 217.035 2766.6 229.5 2785 228.5V228.5V228.5C2801.08 227.626 2811.31 211.879 2821.3 199.245C2823.6 196.336 2826.04 193.621 2828.5 191.5V191.5C2841.17 180.573 2859.03 173.235 2874.97 178.323C2875.15 178.38 2875.33 178.439 2875.5 178.5C2881.86 180.746 2886.72 186.595 2890.36 193.361C2900.35 211.903 2891.75 237.023 2903.5 254.5V254.5C2911.92 267.018 2924.85 272.091 2939.5 268.5C2945.57 267.013 2951.31 261.69 2955.7 256.435C2961.93 248.993 2966.17 240.156 2969.98 231.232C2974.28 221.147 2979.7 207.155 2982 196C2982.02 195.887 2982.05 195.773 2982.07 195.659C2986.54 173.435 2990.42 145.942 3012 139V139V139C3034.85 131.65 3058.08 147.813 3079.05 159.495C3099.5 170.893 3124.2 184.766 3134.5 191C3149.59 200.131 3168.14 209.892 3175.14 213.527C3177.05 214.518 3178.96 215.479 3180.91 216.384C3185.11 218.327 3193.06 221.813 3199.5 223.5C3209.51 226.121 3216.28 227.05 3226 223.5C3231.11 221.632 3236.42 217.015 3240.36 212.992C3244.69 208.558 3248.76 203.856 3253.26 199.588L3265.91 187.587C3278.53 175.615 3295.13 168.136 3312.5 169V169V169C3333.76 170.057 3354 177.879 3372.52 188.367L3382.3 193.904C3384.77 195.301 3387.25 196.653 3389.79 197.901C3396.27 201.072 3409.65 207.309 3419 209.5C3441.74 214.83 3454.4 215.417 3477.5 212V212C3503.13 208.208 3530.03 207.888 3551.95 221.717C3564.46 229.612 3578.34 238.086 3590 244.5C3598.75 249.315 3609.97 255.008 3619.51 259.744C3632.43 266.16 3647.15 267.854 3661.25 264.819V264.819C3672.86 262.32 3683.57 256.701 3692.23 248.567L3704 237.5V237.5C3714.09 225.631 3730.77 221.79 3745.03 228.052L3754.61 232.255C3771.7 239.76 3791.57 236.965 3805.93 225.035L3815 217.5V217.5C3823.3 210.03 3836.07 210.661 3843.6 218.912L3844.3 219.679C3845.1 220.558 3845.82 221.503 3846.47 222.503L3864.5 250.5V250.5C3874.25 266.427 3888.78 278.874 3906.01 286.07L3907.6 286.733C3919.08 291.53 3931.41 294 3943.86 294H3947.81C3948.27 294 3948.72 294.003 3949.18 294.002C3952.74 293.992 3969.46 293.718 3979.5 289.5V289.5C3992.93 283.857 4001.77 270.846 4006.01 256.911C4007.61 251.629 4008.86 246.135 4009 241.5C4009.23 233.865 4006.1 223.723 4003.11 215.912C4000.04 207.859 3996.96 199.777 3994.91 191.405L3993.03 183.729C3992.01 179.591 3991.5 175.347 3991.5 171.086V157.269C3991.5 149.532 3995.09 142.232 4001.21 137.506V137.506C4006.22 133.646 4012.5 131.828 4018.79 132.418L4021.04 132.628C4023.67 132.875 4026.26 133.461 4028.74 134.37L4029.16 134.524C4036.19 137.103 4042.25 141.885 4045.86 148.448C4047.76 151.898 4049.71 155.72 4051 159C4051.98 161.492 4052.88 164.401 4053.67 167.368C4056.76 179.013 4063.15 190.462 4074.5 194.5V194.5C4083.67 197.76 4089.28 199.439 4099 199C4106.81 198.647 4111.33 197.603 4118.5 194.5C4121.43 193.234 4124.44 191.277 4127.31 189.049C4139.33 179.72 4148.26 166.767 4160.8 158.137C4163.84 156.043 4167 154.198 4170 153C4176.66 150.343 4186.2 149.427 4192.93 149.124C4198.31 148.882 4203.68 148.979 4209.06 149.112C4219.52 149.37 4237.97 150.219 4251 153C4263.99 155.771 4271.6 157.116 4283.5 163C4289.35 165.889 4295.67 170.475 4301.35 175.155C4313.78 185.376 4328.05 193.516 4343.89 196.323V196.323C4353.86 198.089 4364.08 197.375 4374.2 197.105C4379 196.977 4384.07 197.38 4388 199C4398.05 203.14 4403.68 216.461 4406.73 227.71C4409.74 238.856 4413.49 249.971 4420.13 259.421V259.421C4424.35 265.432 4429.47 270.845 4435.99 274.231C4439.92 276.272 4444.68 278.349 4449.5 279.5C4460.16 282.045 4475.28 280.075 4486 278C4494.74 276.308 4503.17 273.331 4511.91 271.625C4515.65 270.894 4519.63 270.37 4523 270.5C4526.31 270.628 4529.82 271.418 4533.33 272.609C4554.45 279.787 4574.09 296.743 4596 292.5V292.5C4602.49 291.244 4606.15 290.07 4612 287C4623.49 280.97 4628.84 274.64 4635.5 263.5V263.5C4646.45 245.189 4645.44 219.197 4662.65 206.591C4662.93 206.385 4663.21 206.188 4663.5 206C4670.72 201.239 4683.43 199.645 4688.65 199.175C4690.22 199.035 4691.78 199 4693.35 199V199C4713.9 199 4733.9 205.63 4750.38 217.906L4765.12 228.89C4787.6 245.632 4814.29 255.786 4842.21 258.214L4843.41 258.318C4881.76 261.653 4919.98 250.613 4950.65 227.343L4982 203.553C4985.99 200.523 4990.23 197.821 4994.66 195.476V195.476C5031.02 176.226 5075.72 183.258 5104.41 212.742L5110.5 219V219C5138.31 247.646 5189.26 250.206 5200.99 212.043C5203.07 205.262 5203.96 198.463 5203 192C5202.73 190.203 5202.31 188.384 5201.77 186.556C5193.8 159.809 5195.6 123.503 5223.5 123V123C5242.51 122.657 5265.86 133.889 5281.18 142.706C5292.3 149.105 5303.55 155.352 5315.51 160.002V160.002C5333.35 166.94 5352.32 170.5 5371.46 170.5H5389H5398.32C5439.86 170.5 5479.19 189.259 5505.32 221.548L5512.84 230.835C5525.32 246.254 5542.16 257.562 5561.15 263.288V263.288C5586.04 270.793 5612.89 268.191 5635.88 256.047L5668.51 238.807C5691.94 226.429 5720 226.55 5743.32 239.13V239.13C5770.82 253.963 5804.46 251.296 5829.28 232.317L5842.23 222.415C5867.38 203.182 5899.88 196.369 5930.64 203.885L5935.15 204.988C5971.13 213.778 6009.21 204.685 6036.67 179.84C6053.13 164.95 6071.26 148.171 6085.5 134C6101.86 117.722 6118.39 103.821 6138.5 92.5C6147.87 87.2253 6158.41 83.8548 6168.78 81.7438C6202.04 74.9799 6231.34 99.0097 6244 130.5V130.5L6253.99 155.574C6263.36 179.085 6280.8 198.487 6303.18 210.297L6308.07 212.877C6334.48 226.811 6365.89 227.558 6392.93 214.896V214.896C6406.14 208.714 6417.74 199.586 6426.86 188.214L6439.14 172.903C6449.89 159.501 6463.72 148.903 6479.46 142.018V142.018C6529.45 120.146 6587.59 139.904 6617.48 185.555C6628.97 203.095 6641.14 220.642 6652.5 235V235C6682.74 273.235 6728.61 296.271 6777.36 296.002C6809.13 295.827 6845.04 292.994 6872.5 283.5C6881.02 280.555 6890.53 276.345 6899.81 271.803C6924.91 259.529 6929.73 226.889 6911.3 205.895L6909.78 204.161C6895.84 188.28 6895.67 164.574 6909.38 148.495L6911.93 145.503C6927.13 127.684 6954.48 127.151 6970.35 144.362V144.362C6986.16 161.495 7013.21 160.306 7033.08 148.127C7044.38 141.201 7056.95 136.626 7068 140C7080.09 143.693 7084.3 151.123 7094.75 158.25C7105.2 165.377 7114.01 166.313 7121.5 176.5C7122.38 177.701 7123.2 179.056 7123.94 180.507C7131.37 195.024 7139.71 209.929 7154.24 217.325V217.325C7157.73 219.102 7161.43 220.455 7165.24 221.356L7169.16 222.28C7186.27 226.321 7204.22 224.79 7220.46 218.037C7234.6 212.155 7252.18 204.926 7266 199.5C7298.95 186.563 7315.78 171.555 7351 168C7394.56 163.604 7417.45 184.078 7460.5 192C7469.72 193.697 7480.4 195.484 7491.02 197.183C7527.48 203.013 7564.75 199.618 7599.89 188.295V188.295C7624.15 180.48 7649.48 176.5 7674.96 176.5H7809H7889"
              stroke="#FEF7D9"
              strokeWidth={0.7 * SCALE_FACTOR}
              style={{
                strokeDashoffset: pathLength - (scrollProgress / 100) * pathLength,
                transition: 'stroke-dashoffset 0.1s linear'
              }}
              transform={`scale(${SCALE_FACTOR})`}
            />
            <path
              d="M95.5 133C95.0445 130.623 94.4906 127.909 93.9004 125.106C90.8873 110.797 87.345 95.6084 88 81V81C88.4601 70.7372 92.5 56 92.5 56"
              stroke="#FEF7D9"
              strokeWidth={0.7 * SCALE_FACTOR}
              transform={`scale(${SCALE_FACTOR})`}
            />
            <path
              d="M92.5 56C92.5 56 96.6579 41.7909 98.5 32.5C100.987 19.9564 102.5 0 102.5 0"
              stroke="#FEF7D9"
              strokeWidth={0.7 * SCALE_FACTOR}
              transform={`scale(${SCALE_FACTOR})`}
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width={7963 * SCALE_FACTOR} height={385 * SCALE_FACTOR} fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}