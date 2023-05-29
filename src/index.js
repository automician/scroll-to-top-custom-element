import React from 'react';
import * as ReactDOM from "react-dom/client";
import { register } from "react-to-html-element";
import { ScrollToTopButton } from "./ScrollToTopButton";

register(ScrollToTopButton, 'scroll-to-top', React, ReactDOM);
