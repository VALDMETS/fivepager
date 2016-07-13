import $ from 'jquery';
import Bb from 'backbone';
import router from './router';
import navSystem from './views/navbar';

navSystem();

Bb.history.start();
