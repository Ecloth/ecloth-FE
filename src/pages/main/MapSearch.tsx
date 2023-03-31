import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { SlMagnifier } from 'react-icons/sl';
import { BiCurrentLocation } from 'react-icons/Bi';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import { useRecoilState } from 'recoil';
import {
  CurrentXState,
  CurrentYState,
  GridXState,
  GridYState,
} from '../../atoms/Atom';

export default function MapSearch() {
  return <MapSearchCode />;
}
