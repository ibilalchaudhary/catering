import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Height, USER_NAME} from '../Constants/Constants';
import Heading from '../Components/Heading';
import {TEXT_COLOR, THIRD} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import Button from '../Components/Button';
import Features from '../Components/Features';
function Chairs({show}) {
  return (
    <Features
      svg={
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={23.29}
          height={23.808}
          viewBox="0 0 23.29 31.808">
          <G data-name="Group 18" fill="#fff">
            <Path
              data-name="Path 2160"
              d="M2.193 17.549L.148 30.841a.839.839 0 001.647.316l3.14-13.608z"
            />
            <Path
              data-name="Path 2161"
              d="M8.087 17.549L6.042 30.841a.839.839 0 001.647.316l3.141-13.608z"
            />
            <Path
              data-name="Path 2162"
              d="M16.591 17.549l2.045 13.292a.839.839 0 01-1.647.316l-3.14-13.608z"
            />
            <Path
              data-name="Path 2163"
              d="M20.978 17.549l2.045 13.292a.839.839 0 01-1.647.316l-3.14-13.608z"
            />
          </G>
          <Path
            data-name="Path 2164"
            d="M3.294 13.162H4.55a3.727 3.727 0 003.49-2.419l3.495-9.32A2.194 2.194 0 0113.586 0h7.508a2.194 2.194 0 012.177 2.466l-.929 7.431a3.727 3.727 0 01-3.7 3.265 1.1 1.1 0 00-1.1 1.1V17H2.194v-2.741a1.1 1.1 0 011.1-1.1z"
            fill="#fff"
          />
          <Path
            data-name="Path 2165"
            d="M3.294 15.355h10.968a1.1 1.1 0 011.1 1.1v1.1H2.194v-1.1a1.1 1.1 0 011.1-1.1z"
            fill="#fff"
          />
          <Path
            data-name="Path 2166"
            d="M3.842 15.355h10.42a1.1 1.1 0 011.1 1.1v1.1H2.742v-1.1a1.1 1.1 0 011.1-1.1z"
            fill="#fff"
          />
          <Path
            data-name="Path 2167"
            d="M23.273 2.466l-1.337 10.7h-3.29a1.1 1.1 0 00-1.1 1.1v3.29h-2.191v-3.29a1.1 1.1 0 011.1-1.1 3.727 3.727 0 003.7-3.265l.554-4.427a6.344 6.344 0 00.049-.779A6.276 6.276 0 0018.647 0h2.45a2.193 2.193 0 012.176 2.466z"
            fill="#fff"
          />
          <Path
            data-name="Path 2168"
            d="M21.388 17.549h-3.839v-3.29a1.1 1.1 0 011.1-1.1 3.727 3.727 0 003.7-3.265z"
            fill="#fff"
          />
          <Path
            data-name="Path 2169"
            d="M2.194 17.549H0v-3.287a1.1 1.1 0 011.1-1.1h2.19a1.1 1.1 0 00-1.1 1.1z"
            fill="#fff"
          />
        </Svg>
      }
      selected={show}
    />
  );
}

function Ballons({show}) {
  return (
    <Features
      svg={
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={23.29}
          height={23.808}
          viewBox="0 0 30.262 30.262">
          <G data-name="Group 28" fill="#fff">
            <G data-name="Group 22">
              <Path
                data-name="Path 2178"
                d="M13.475 30.262a.443.443 0 01-.443-.443v-5.592a.444.444 0 01.887 0v5.594a.443.443 0 01-.444.441z"
              />
              <G data-name="Group 21">
                <Path
                  data-name="Path 2179"
                  d="M13.754 25.35h-.549a.616.616 0 01-.585-.808l.476-1.442h.767l.476 1.442a.616.616 0 01-.585.808z"
                />
                <Path
                  data-name="Path 2180"
                  d="M18.729 15.774c0 3.568-2.35 7.653-5.249 7.653s-5.249-4.085-5.249-7.653a5.25 5.25 0 1110.5 0z"
                />
                <Path
                  data-name="Path 2181"
                  d="M13.479 10.506a6.776 6.776 0 00-1.182.1c2.33.413 4.067 2.1 4.067 5.167s-1.737 6.518-4.067 7.425a3.244 3.244 0 001.182.228c2.9 0 5.249-4.085 5.249-7.653a4.883 4.883 0 00-5.249-5.267z"
                />
              </G>
            </G>
            <G data-name="Group 24">
              <Path
                data-name="Path 2182"
                d="M5.682 30.262a.443.443 0 01-.443-.443 2.877 2.877 0 00-.265-1.046 2.559 2.559 0 01-.107-2.167 4.521 4.521 0 01.5-.816 1.866 1.866 0 00.473-1.08v-.043a1.825 1.825 0 00-.473-1.123 4.515 4.515 0 01-.5-.816 2.559 2.559 0 01.107-2.167 2.876 2.876 0 00.265-1.046v-2.669a.444.444 0 11.887 0v2.669a3.661 3.661 0 01-.326 1.368 1.72 1.72 0 00-.122 1.487 3.708 3.708 0 00.405.658 2.678 2.678 0 01.638 1.585.442.442 0 010 .054 2.649 2.649 0 01-.639 1.639 3.707 3.707 0 00-.405.658 1.72 1.72 0 00.122 1.487 3.661 3.661 0 01.326 1.368.443.443 0 01-.443.443zm1.037-5.6z"
              />
              <G data-name="Group 23">
                <Path
                  data-name="Path 2183"
                  d="M5.967 17.639h-.549a.616.616 0 01-.585-.808l.476-1.442h.767l.478 1.441a.616.616 0 01-.587.809z"
                />
                <Path
                  data-name="Path 2184"
                  d="M10.943 8.063c0 3.568-2.35 7.653-5.249 7.653S.443 11.631.443 8.063a4.883 4.883 0 015.249-5.268 4.883 4.883 0 015.251 5.268z"
                />
                <Path
                  data-name="Path 2185"
                  d="M5.696 2.795a6.779 6.779 0 00-1.182.1c2.33.413 4.067 2.1 4.067 5.167s-1.737 6.518-4.067 7.425a3.243 3.243 0 001.182.228c2.9 0 5.249-4.085 5.249-7.653a4.883 4.883 0 00-5.249-5.267z"
                />
              </G>
            </G>
            <G data-name="Group 27">
              <Path
                data-name="Path 2186"
                d="M24.569 30.262a.443.443 0 01-.443-.443v-1.732a2.878 2.878 0 00-.265-1.046 2.559 2.559 0 01-.107-2.167 4.516 4.516 0 01.5-.816 1.825 1.825 0 00.474-1.123 1.9 1.9 0 00-.486-1.146 4.145 4.145 0 01-.542-.942 2.126 2.126 0 01.107-1.756 3.564 3.564 0 00.324-1.5V14.25a.444.444 0 11.887 0v3.341a4.428 4.428 0 01-.389 1.836 1.265 1.265 0 00-.1 1.112 3.338 3.338 0 00.436.742 2.726 2.726 0 01.648 1.658 2.65 2.65 0 01-.639 1.639 3.709 3.709 0 00-.405.658 1.72 1.72 0 00.122 1.487 3.661 3.661 0 01.326 1.368v1.732a.443.443 0 01-.448.439z"
              />
              <Path
                data-name="Path 2187"
                d="M24.853 15.173H24.3a.615.615 0 01-.585-.808l.476-1.442h.767l.476 1.442a.616.616 0 01-.581.808z"
              />
              <G data-name="Group 26">
                <Path
                  data-name="Path 2188"
                  d="M29.818 5.711c0 3.568-2.35 7.653-5.249 7.653S19.32 9.279 19.32 5.711a5.25 5.25 0 1110.5 0z"
                />
                <Path
                  data-name="Path 2189"
                  d="M24.569.443a6.779 6.779 0 00-1.182.1c2.33.413 4.067 2.1 4.067 5.167s-1.737 6.518-4.067 7.425a3.243 3.243 0 001.182.228c2.9 0 5.249-4.085 5.249-7.653A4.883 4.883 0 0024.569.443z"
                />
                <G data-name="Group 25">
                  <Path
                    data-name="Path 2190"
                    d="M16.281 12.794a3.5 3.5 0 00-1.579-.805.443.443 0 10-.206.862 2.629 2.629 0 011.186.6 2.367 2.367 0 01.657 1.1.443.443 0 10.851-.25 3.239 3.239 0 00-.908-1.506z"
                  />
                  <Path
                    data-name="Path 2191"
                    d="M8.494 5.082a3.5 3.5 0 00-1.579-.805.443.443 0 10-.206.862 2.629 2.629 0 011.186.6 2.369 2.369 0 01.657 1.1.443.443 0 00.851-.25 3.24 3.24 0 00-.909-1.507z"
                  />
                  <Path
                    data-name="Path 2192"
                    d="M28.279 4.238a3.241 3.241 0 00-.908-1.506 3.5 3.5 0 00-1.579-.805.443.443 0 00-.206.862 2.63 2.63 0 011.186.6 2.369 2.369 0 01.657 1.1.443.443 0 10.851-.25z"
                  />
                </G>
              </G>
            </G>
          </G>
          <G data-name="Group 29">
            <Path
              data-name="Path 2193"
              d="M7.979.887a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 30">
            <Path
              data-name="Path 2194"
              d="M17.547 1.744a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 31">
            <Path
              data-name="Path 2195"
              d="M15.682 8.482a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 32">
            <Path
              data-name="Path 2196"
              d="M21.1 18.082a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 33">
            <Path
              data-name="Path 2197"
              d="M.428 16.411a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 34">
            <Path
              data-name="Path 2198"
              d="M.443 30.262a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 35">
            <Path
              data-name="Path 2199"
              d="M2.512 20.658a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 36">
            <Path
              data-name="Path 2200"
              d="M28.66 24.997a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 37">
            <Path
              data-name="Path 2201"
              d="M27.502 20.776a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 38">
            <Path
              data-name="Path 2202"
              d="M9.161 28.619a.444.444 0 000-.887.444.444 0 000 .887z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 40" fill="#fff">
            <Path
              data-name="Path 2203"
              d="M1.915.13a.443.443 0 00-.627 0L.13 1.288a.443.443 0 10.627.627L1.915.757a.443.443 0 000-.627z"
            />
            <Path
              data-name="Path 2204"
              d="M13.569 2.706a.443.443 0 00-.627.627L14.1 4.489a.443.443 0 00.627-.627z"
            />
            <G data-name="Group 39">
              <Path
                data-name="Path 2205"
                d="M20.245 22.875l-1.158 1.158a.443.443 0 00.627.627l1.158-1.158a.443.443 0 10-.627-.627z"
              />
              <Path
                data-name="Path 2206"
                d="M1.915 24.241a.443.443 0 00-.627.627l1.158 1.158a.443.443 0 10.627-.627z"
              />
              <Path
                data-name="Path 2207"
                d="M27.815 28.347a.443.443 0 00-.627.627l1.158 1.158a.443.443 0 10.627-.627z"
              />
            </G>
            <Path
              data-name="Path 2208"
              d="M30.132 14.647a.443.443 0 00-.627 0l-1.158 1.158a.443.443 0 10.627.627l1.158-1.158a.443.443 0 000-.627z"
            />
            <Path
              data-name="Path 2209"
              d="M17.281 28.347a.443.443 0 10-.627.627l1.158 1.158a.443.443 0 10.627-.627z"
            />
          </G>
        </Svg>
      }
      selected={show}
    />
  );
}

function Table({show}) {
  return (
    <Features
      svg={
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={23.29}
          height={23.808}
          viewBox="0 0 32.041 21.371">
          <Path
            data-name="Path 2170"
            d="M4.476 6.622v13.752a1 1 0 001.992.062L7.33 6.622H4.476z"
            fill="#fff"
          />
          <Path
            data-name="Path 2171"
            d="M24.711 6.622l.862 13.814a1 1 0 001.992-.062V6.622z"
            fill="#fff"
          />
          <Path
            data-name="Path 2172"
            d="M1.773 2.943v2.52a1.16 1.16 0 001.16 1.16h26.175a1.16 1.16 0 001.16-1.16v-2.52z"
            fill="#fff"
          />
          <G data-name="Group 19" fill="#fff">
            <Path
              data-name="Path 2173"
              d="M31.268 0H.774A.774.774 0 000 .774v1.4a.774.774 0 00.774.774h30.494a.774.774 0 00.774-.774v-1.4A.774.774 0 0031.268 0z"
            />
            <Path
              data-name="Path 2174"
              d="M31.268 0H28.71a.774.774 0 01.774.774v1.4a.774.774 0 01-.774.774h2.558a.774.774 0 00.774-.774v-1.4A.774.774 0 0031.268 0z"
            />
          </G>
          <Path
            data-name="Path 2175"
            d="M27.705 2.943v2.52a1.16 1.16 0 01-1.16 1.16h2.56a1.16 1.16 0 001.16-1.16v-2.52z"
            fill="#fff"
          />
          <G data-name="Group 20" fill="#fff">
            <Path
              data-name="Path 2176"
              d="M4.476 8.452h2.74l.114-1.827H4.476z"
            />
            <Path data-name="Path 2177" d="M24.826 8.452h2.74v-1.83h-2.854z" />
          </G>
        </Svg>
      }
      selected={show}
    />
  );
}

function Lights({show}) {
  return (
    <Features
      svg={
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={23.29}
          height={23.808}
          viewBox="0 0 35.596 21.26">
          <G data-name="Group 52">
            <G data-name="Group 43">
              <Path
                data-name="Path 2210"
                d="M22.307 14.863a6.843 6.843 0 01-4.32 6.361.512.512 0 01-.378 0 6.844 6.844 0 01.189-12.795 6.844 6.844 0 014.509 6.434z"
                fill="#fff"
              />
              <Path
                data-name="Path 2211"
                d="M22.307 14.863a6.843 6.843 0 01-4.32 6.362.516.516 0 01-.378 0 6.842 6.842 0 01-.927-.452 6.843 6.843 0 000-11.818 6.787 6.787 0 011.116-.524 6.844 6.844 0 014.509 6.432z"
                fill="#fff"
              />
              <G data-name="Group 41">
                <Path
                  data-name="Path 2212"
                  d="M17.798 6.741a.522.522 0 01-.443-.246 8.851 8.851 0 01-1.308-2.935 1.751 1.751 0 013.5 0 8.852 8.852 0 01-1.308 2.935.522.522 0 01-.441.246zm0-3.89a.709.709 0 00-.708.708 5.888 5.888 0 00.708 1.627 5.9 5.9 0 00.708-1.627.709.709 0 00-.708-.708z"
                  fill="#fff"
                />
              </G>
              <G data-name="Group 42">
                <Path
                  data-name="Path 2213"
                  d="M17.798 6.741a.522.522 0 01-.443-.246 8.851 8.851 0 01-1.308-2.935 1.751 1.751 0 013.5 0 8.852 8.852 0 01-1.308 2.935.522.522 0 01-.441.246zm0-3.89a.709.709 0 00-.708.708 5.888 5.888 0 00.708 1.627 5.9 5.9 0 00.708-1.627.709.709 0 00-.708-.708z"
                  fill="#fff"
                />
              </G>
              <Path
                data-name="Path 2214"
                d="M19.251 9.444h-2.905a.507.507 0 01-.507-.507v-1.7a1.015 1.015 0 011.015-1.015h1.891a1.015 1.015 0 011.015 1.015v1.7a.507.507 0 01-.509.507z"
                fill="#fff"
              />
              <Path
                data-name="Path 2215"
                d="M19.758 7.233v1.7a.507.507 0 01-.507.508H17.29a.508.508 0 00.508-.508v-1.7a1.014 1.014 0 00-.98-1.014h1.926a1.014 1.014 0 011.014 1.014z"
                fill="#fff"
              />
            </G>
            <G data-name="Group 49">
              <G data-name="Group 46">
                <Path
                  data-name="Path 2216"
                  d="M34.45 13.315a6.843 6.843 0 01-4.32 6.362.513.513 0 01-.378 0 6.844 6.844 0 01.189-12.795 6.844 6.844 0 014.509 6.433z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 2217"
                  d="M34.45 13.315a6.843 6.843 0 01-4.32 6.362.516.516 0 01-.378 0 6.842 6.842 0 01-.927-.452 6.843 6.843 0 000-11.818 6.789 6.789 0 011.116-.524 6.844 6.844 0 014.509 6.433z"
                  fill="#fff"
                />
                <G data-name="Group 44">
                  <Path
                    data-name="Path 2218"
                    d="M29.942 5.193a.521.521 0 01-.443-.246 8.852 8.852 0 01-1.308-2.935 1.751 1.751 0 013.5 0 8.853 8.853 0 01-1.308 2.935.522.522 0 01-.441.246zm0-3.89a.709.709 0 00-.708.708 5.888 5.888 0 00.708 1.627 5.9 5.9 0 00.708-1.627.709.709 0 00-.708-.708z"
                    fill="#fff"
                  />
                </G>
                <G data-name="Group 45">
                  <Path
                    data-name="Path 2219"
                    d="M29.942 5.193a.521.521 0 01-.443-.246 8.852 8.852 0 01-1.308-2.935 1.751 1.751 0 013.5 0 8.853 8.853 0 01-1.308 2.935.522.522 0 01-.441.246zm0-3.89a.709.709 0 00-.708.708 5.888 5.888 0 00.708 1.627 5.9 5.9 0 00.708-1.627.709.709 0 00-.708-.708z"
                    fill="#fff"
                  />
                </G>
                <Path
                  data-name="Path 2220"
                  d="M31.395 7.896H28.49a.507.507 0 01-.507-.507v-1.7a1.015 1.015 0 011.015-1.015h1.891a1.015 1.015 0 011.016 1.011v1.7a.507.507 0 01-.51.511z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 2221"
                  d="M31.901 5.682v1.7a.507.507 0 01-.507.508h-1.961a.508.508 0 00.508-.508v-1.7a1.014 1.014 0 00-.98-1.014h1.93a1.014 1.014 0 011.01 1.014z"
                  fill="#fff"
                />
              </G>
              <G data-name="Group 48">
                <Path
                  data-name="Path 2222"
                  d="M10.159 13.315a6.843 6.843 0 01-4.32 6.362.513.513 0 01-.378 0 6.844 6.844 0 01.198-12.795 6.844 6.844 0 014.5 6.433z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 2223"
                  d="M10.163 13.315a6.843 6.843 0 01-4.32 6.362.516.516 0 01-.378 0 6.84 6.84 0 01-.927-.452 6.843 6.843 0 000-11.818 6.789 6.789 0 011.116-.524 6.844 6.844 0 014.509 6.432z"
                  fill="#fff"
                />
                <G data-name="Group 47">
                  <Path
                    data-name="Path 2224"
                    d="M5.653 5.193a.521.521 0 01-.443-.246 8.852 8.852 0 01-1.308-2.935 1.751 1.751 0 013.5 0 8.854 8.854 0 01-1.308 2.935.522.522 0 01-.441.246zm0-3.89a.709.709 0 00-.708.708 5.888 5.888 0 00.708 1.627 5.9 5.9 0 00.708-1.627.709.709 0 00-.708-.708z"
                    fill="#fff"
                  />
                </G>
                <Path
                  data-name="Path 2225"
                  d="M7.108 7.896H4.202a.507.507 0 01-.507-.507v-1.7A1.015 1.015 0 014.71 4.674h1.891a1.015 1.015 0 011.015 1.015v1.696a.507.507 0 01-.508.511z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 2226"
                  d="M7.614 5.682v1.7a.507.507 0 01-.507.508h-1.96a.508.508 0 00.508-.508v-1.7a1.014 1.014 0 00-.98-1.014h1.926a1.014 1.014 0 011.013 1.014z"
                  fill="#fff"
                />
              </G>
            </G>
            <G data-name="Group 50">
              <Path
                data-name="Path 2227"
                d="M17.799 4.24A48.444 48.444 0 01.335 1.008.521.521 0 01.71.035a47.753 47.753 0 0034.179 0 .521.521 0 11.374.973A48.445 48.445 0 0117.799 4.24z"
                fill="#fff"
              />
            </G>
            <G data-name="Group 51" fill="#fff">
              <Path
                data-name="Path 2228"
                d="M6.363 2.01a2.671 2.671 0 01-.287.807q-.479-.119-.955-.247-.6-.162-1.2-.339Q2.107 1.691.33 1.007A.521.521 0 01.704.034q1.681.647 3.4 1.162.528.159 1.058.3.583.161 1.169.306a.7.7 0 01.03.2z"
              />
              <Path
                data-name="Path 2229"
                d="M18.506 3.559a2.233 2.233 0 01-.227.679h-.962q-.565-.005-1.129-.024A48.466 48.466 0 017.11 3.061a3.231 3.231 0 00.294-1 47.587 47.587 0 008.687 1.108q.55.019 1.1.026h1.214a.7.7 0 01.101.364z"
              />
              <Path
                data-name="Path 2230"
                d="M30.645 2.011a1.843 1.843 0 01-.175.56q-.475.128-.955.248-.516.127-1.035.243a48.465 48.465 0 01-9.078 1.153 2.134 2.134 0 00.141-.656 1.728 1.728 0 00-.044-.391 47.588 47.588 0 008.687-1.108q.537-.12 1.071-.252.587-.145 1.169-.306a.706.706 0 01.219.509z"
              />
              <Path
                data-name="Path 2231"
                d="M35.262 1.008q-1.776.683-3.591 1.224a1.3 1.3 0 00.022-.221 1.736 1.736 0 00-.2-.814q1.716-.515 3.4-1.162a.521.521 0 11.374.973z"
              />
            </G>
          </G>
          <G data-name="Group 53" fill="#fff">
            <Path
              data-name="Path 2232"
              d="M4.951 2.011a2.818 2.818 0 00.305.847H4.115a2.556 2.556 0 01-.211-.847A1.738 1.738 0 014.282.927l1.066.446a.71.71 0 00-.397.638z"
            />
            <Path
              data-name="Path 2233"
              d="M17.09 3.559a3.009 3.009 0 00.328.895h-1.14a2.666 2.666 0 01-.231-.895 1.737 1.737 0 01.35-1.048l1.045.437a.708.708 0 00-.352.611z"
            />
            <Path
              data-name="Path 2234"
              d="M29.233 2.011a3.388 3.388 0 00.38 1l-.946.446a4 4 0 01-.478-1.447 1.734 1.734 0 01.377-1.084l1.066.446a.709.709 0 00-.399.639z"
            />
          </G>
        </Svg>
      }
      selected={show}
    />
  );
}

function Music({show}) {
  return (
    <Features
      svg={
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={23.29}
          height={23.808}
          viewBox="0 0 32.41 32.41">
          <Path
            data-name="Path 2235"
            d="M17.218 27.662a.95.95 0 101.9 0V16.985l-.866-1.652-1.034 2.194z"
            fill="#fff"
          />
          <Path
            data-name="Path 2236"
            d="M30.511 23.865a.95.95 0 001.9 0V13.187l-.9-1.641-1 2.184z"
            fill="#fff"
          />
          <Path
            data-name="Path 2237"
            d="M15.318 10.571a4.749 4.749 0 01-4.748 4.748.95.95 0 110-1.9 2.852 2.852 0 001.69-5.146 23.623 23.623 0 01-4.6-4.2v15.044a.95.95 0 01-1.9 0V.95a.958.958 0 01.665-.912A1.473 1.473 0 016.71 0a.991.991 0 01.8.418L8.589 2.07a19.929 19.929 0 004.792 4.665 4.785 4.785 0 011.937 3.836z"
            fill="#fff"
          />
          <Path
            data-name="Path 2238"
            d="M15.319 10.571a4.749 4.749 0 01-4.748 4.748.95.95 0 110-1.9 2.852 2.852 0 001.69-5.146 23.623 23.623 0 01-4.6-4.2v15.044a.94.94 0 01-.95.95V0a.991.991 0 01.8.418L8.59 2.07a19.929 19.929 0 004.792 4.665 4.785 4.785 0 011.937 3.836z"
            fill="#fff"
          />
          <Path
            data-name="Path 2239"
            d="M15.321 32.414a3.8 3.8 0 113.8-3.8 3.8 3.8 0 01-3.8 3.8z"
            fill="#fff"
          />
          <Path
            data-name="Path 2240"
            d="M6.71 16.629a3.751 3.751 0 00-2.849-1.31 3.8 3.8 0 100 7.6 3.752 3.752 0 002.849-1.31 3.734 3.734 0 000-4.975z"
            fill="#fff"
          />
          <Path
            data-name="Path 2241"
            d="M28.614 28.616a3.8 3.8 0 113.8-3.8 3.8 3.8 0 01-3.8 3.8z"
            fill="#fff"
          />
          <Path
            data-name="Path 2242"
            d="M7.66 19.117a3.656 3.656 0 01-.95 2.488v-4.976a3.656 3.656 0 01.95 2.488z"
            fill="#fff"
          />
          <Path
            data-name="Path 2243"
            d="M32.03 7.912a1 1 0 00-.836-.152l-6.381 1.823-6.912 1.975a.957.957 0 00-.684.912v5.051l1.9-.532 5.7-1.633 5.7-1.633 1.9-.532v-4.52a.936.936 0 00-.387-.759z"
            fill="#fff"
          />
          <Path
            data-name="Path 2244"
            d="M32.414 8.672v4.52l-1.9.532-5.7 1.633V9.584l6.381-1.823a1 1 0 01.836.152.936.936 0 01.383.759z"
            fill="#fff"
          />
        </Svg>
      }
      selected={show}
    />
  );
}

function CardText({heading, text}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
      }}>
      <Text style={{fontSize: 14}}>{heading}</Text>
      <Text style={{fontSize: 14, fontWeight: 'normal', color: '#8D8D8D'}}>
        {text}
      </Text>
    </View>
  );
}

function MenuCard({chairs, lights, ballons, table, music}) {
  return (
    <View
      style={{
        backgroundColor: '#F6F6F6',
        position: 'relative',
        marginBottom: 45,
        borderRadius: 5,
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'row',
          position: 'absolute',
          top: -20,
        }}>
        <Chairs show={chairs} />
        <Ballons show={ballons} />
        <Table show={table} />
        <Lights show={lights} />
        <Music show={music} />
      </View>
      <View
        style={{
          display: 'flex',
          padding: 20,
          borderRadius: 8,
          paddingTop: 45,
        }}>
        <CardText heading="People" text="250" />
        <CardText heading="Menu" text="Custom Menu" />
        <CardText heading="Date" text="9 - 12 - 2000" />
        <CardText heading="Time" text="6:00pm - 9:00pm" />
        <CardText heading="Cost" text="56,000,000" />
      </View>
    </View>
  );
}

export default class DashboardScreen extends Component {
  render() {
    const isOrdered = true;
    return (
      <>
        {isOrdered ? (
          <View style={{height: Height, flex: 1, backgroundColor: '#FFFFFF'}}>
            <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
              <View
                style={{
                  paddingVertical: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../Assets/userPic.png')}
                    style={{width: 50, height: 50}}
                  />
                </TouchableOpacity>
                <Image
                  source={require('../Assets/logo.png')}
                  style={{width: 110, height: 50}}
                />
              </View>

              <View style={{marginVertical: 20}}>
                <MenuCard
                  chairs={true}
                  music={true}
                  ballons={true}
                  lights={true}
                  table={true}
                />
                <MenuCard
                  chairs={true}
                  music={true}
                  ballons={false}
                  lights={true}
                  table={true}
                />
                <MenuCard
                  chairs={true}
                  music={false}
                  ballons={false}
                  lights={true}
                  table={true}
                />
                <MenuCard
                  chairs={true}
                  music={false}
                  ballons={true}
                  lights={true}
                  table={true}
                />
                <MenuCard
                  chairs={true}
                  music={false}
                  ballons={false}
                  lights={true}
                  table={true}
                />
                <MenuCard
                  chairs={true}
                  music={true}
                  ballons={true}
                  lights={true}
                  table={true}
                />
              </View>
            </ScrollView>
            <View style={{height: 60, marginHorizontal: 20}}>
              <Button
                veriant="primary"
                placeholder="Place Order"
                onPress={() => {}}
              />
            </View>
          </View>
        ) : (
          <ImageBackground
            source={require('../Assets/dashboard_background.png')}
            style={{height: Height, flex: 1}}>
            <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
              <View
                style={{
                  paddingVertical: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../Assets/userPic.png')}
                    style={{width: 50, height: 50}}
                  />
                </TouchableOpacity>
                <Image
                  source={require('../Assets/logo.png')}
                  style={{width: 110, height: 50}}
                />
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={{fontSize: 14, color: TEXT_COLOR}}>
                  Hi {USER_NAME}
                </Text>
                <Heading varinat="yellow" placeholder="Let's Order" />
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F6F6F6',
                    borderRadius: 5,
                    height: 120,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33.359}
                    height={33.359}
                    viewBox="0 0 33.359 33.359">
                    <G
                      data-name="Icon ionic-md-add-circle-outline"
                      fill="#ffca40">
                      <Path
                        data-name="Path 2254"
                        d="M14.995 25.26v-6.9h-6.9v-3.364h6.9v-6.9h3.368v6.9h6.9v3.368h-6.9v6.9z"
                      />
                      <Path
                        data-name="Path 2255"
                        d="M29.991 16.679a13.306 13.306 0 11-3.9-9.414 13.256 13.256 0 013.9 9.414m3.368 0a16.679 16.679 0 10-16.679 16.68 16.677 16.677 0 0016.679-16.68z"
                      />
                    </G>
                  </Svg>
                  <Text
                    style={{fontSize: 14, color: TEXT_COLOR, marginTop: 10}}>
                    Place your First Order
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        )}
      </>
    );
  }
}
