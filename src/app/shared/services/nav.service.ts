import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  badgeText?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  children2?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?: string;
  dirchange?: boolean;
  nochild?: any;
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search = false;

  // Language
  public language = false;

  // Mega Menu
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen = false;
  active: any;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    // Dashboard
    {
      title: 'team-tree',
      icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <!-- نفر وسط -->
      <circle cx="32" cy="20" r="6" />
      <path d="M24 40c0-6 16-6 16 0v4H24v-4z" />
      
      <!-- نفر سمت چپ -->
      <circle cx="20" cy="24" r="4" />
      <path d="M12 40c0-4 12-4 12 0v4H12v-4z" />
      
      <!-- نفر سمت راست -->
      <circle cx="44" cy="24" r="4" />
      <path d="M40 40c0-4 12-4 12 0v4H40v-4z" />
    </svg>`,
      type: 'link',
      path: '/team-tree',
      selected: false,
      active: false,
      dirchange: false,
      children: [],
    },
    {
      title: 'Dashboards',
      icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" opacity="0.2"/><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      type: 'sub',
      selected: false,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/dashboards/gaming',
          title: 'Gaming',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/sales',
          title: 'Sales',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/analytics',
          title: 'Analytics',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/ecommerce',
          title: 'Ecommerce',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/crypto',
          title: 'Crypto',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/nft',
          title: 'NFT',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/crm',
          title: 'CRM',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/hrm',
          title: 'HRM',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/jobs',
          title: 'Jobs',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/projects',
          title: 'Projects',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/stocks',
          title: 'Stocks',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/courses',
          title: 'Courses',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Pages',
      type: 'sub',
      active: false,
      selected: false,
      dirchange: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      children: [
        {
          path: '/pages/profile',
          title: 'Profile',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/profile-settings',
          title: 'Profile Settings',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/chat',
          title: 'Chat',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/contacts',
          title: 'Contacts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/contactus',
          title: 'Contact Us',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Blog',
          type: 'sub',
          active: false,
          dirchange: false,
          selected: false,
          children: [
            {
              path: '/pages/blog/blog',
              title: 'Blog',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/blog/blog-details',
              title: 'Blog Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/blog/create-blog',
              title: 'Create Blog',
              type: 'link',
              dirchange: false,
            },
          ],
        },
      
        {
          title: 'Email',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/pages/email/mailapp',
              title: 'Mail App',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/email/mailsettings',
              title: 'mail Settings',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/emptypage',
          title: 'Empty',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/faqs',
          title: "FAQ's",
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Invoice',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/pages/invoice/create-invoice',
              title: 'Create Invoice',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/invoice/invoice-details',
              title: 'Invoice Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/invoice/invoice-list',
              title: 'Invoice List',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/landing',
          title: 'Landing',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/jobs-landing',
          title: 'Jobs Landing',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/notifications',
          title: 'Notification',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/pricing',
          title: 'Pricing',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/reviews',
          title: 'Reviews',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/search-page',
          title: 'Search Page',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/team',
          title: 'Team',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/terms-conditions',
          title: 'Terms & Conditions',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/timeline',
          title: 'Timeline',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/todolist',
          title: 'To Do List',
          type: 'link',
          dirchange: false,
        },
       
      ],
    },
    {
      title: 'UI Elements',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z" opacity="0.2"/><rect x="24" y="56" width="208" height="40" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/ui-elements/alerts',
          title: 'Alerts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/badge',
          title: 'Badge',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/breadcrumb',
          title: 'Breadcrumb',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/buttons',
          title: 'Buttons',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/button-group',
          title: 'Button Group',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/cards',
          title: 'cards',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/dropdowns',
          title: 'DropDowns',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/images&figures',
          title: 'Images Figures',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/links-interactions',
          title: 'Links Interactions',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/list-group',
          title: 'List Group',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/nav-tabs',
          title: 'Navs & Tabs',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/objectfit',
          title: 'Object Fit',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/pagination',
          title: 'Pagination',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/popovers',
          title: 'Popovers',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/progress',
          title: 'Progress',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/spinners',
          title: 'Spinners',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/toasts',
          title: 'Toasts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/tooltips',
          title: 'Tooltips',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/typography',
          title: 'Typography',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Authentication',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,32A96,96,0,0,0,63.8,199.38h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.37A96,96,0,0,0,128,32Z" opacity="0.2"/><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="200 128 224 152 248 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="8 128 32 104 56 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,104v24a96,96,0,0,0,174,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,152V128A96,96,0,0,0,50,72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      selected: false,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/authentication/coming-soon',
          title: 'Coming-Soon',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Create Password',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/create-password/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/create-password/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Lock Screen',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/lock-screen/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/lock-screen/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Reset Password',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/reset-password/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/reset-password/cover',
              title: 'cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Sign Up',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/sign-up/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/sign-up/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Sign In',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/sign-in/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/sign-in/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Two-Step Verification',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/twostep-verification/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/twostep-verification/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Under Maintainance',
          path: '/authentication/under-maintainance',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Error',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" opacity="0.2"/><path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="144" x2="128" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="180" r="12"/></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'error/error401',
          title: '401 - Error ',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'error/error404',
          title: '404 - Error ',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'error/error500',
          title: '500 - Error ',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Charts',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="152" y="40" width="56" height="168" opacity="0.2"/><polyline points="48 208 48 136 96 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="224" y1="208" x2="32" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="96 208 96 88 152 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 208 152 40 208 40 208 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Apex Charts',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/charts/apex-charts/line-charts',
              title: 'Line Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/area-charts',
              title: 'Area Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/column-charts',
              title: 'Column Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/bar-charts',
              title: 'Bar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/mixedcharts',
              title: 'Mixed Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/rangeareacharts',
              title: 'Range Area Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/timelinecharts',
              title: 'TimeLine Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/funnel-charts',
              title: 'Funnel Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/candlestickcharts',
              title: 'CandleStick Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/boxplotcharts',
              title: 'BoxPlot Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/bubblecharts',
              title: 'Bubble charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/scattercharts',
              title: 'Scatter Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/heatmapcharts',
              title: 'Heatmap Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/treemapcharts',
              title: 'TreeMap Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/piecharts',
              title: 'Pie Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/radialbarcharts',
              title: 'Radialbar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/radarcharts',
              title: 'Radar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/polarareacharts',
              title: 'Polararea Charts',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/charts/chartjs',
          title: 'Chartjs Charts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/charts/echart',
          title: 'Echart Charts',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Apps',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="48" y="48" width="64" height="64" rx="8" opacity="0.2"/><rect x="144" y="48" width="64" height="64" rx="8" opacity="0.2"/><rect x="48" y="144" width="64" height="64" rx="8" opacity="0.2"/><rect x="144" y="144" width="64" height="64" rx="8" opacity="0.2"/><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'File Manager',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/filemanager/filemanager',
              title: 'File manager',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Ecommerce',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/ecommerce/addproduct',
              title: 'Add Products',
              type: 'link',
              dirchange: false,
            },

            {
              path: '/apps/ecommerce/cart',
              title: 'Cart',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/ecommerce/checkout',
              title: 'Checkout',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/ecommerce/edit-products',
              title: 'Edit products',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/ecommerce/orderdetails',
              title: 'Order Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/ecommerce/orders',
              title: 'Orders',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/ecommerce/products',
              title: 'Products',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/ecommerce/product-details',
              title: 'Product Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/ecommerce/products-list',
              title: 'Products List',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/ecommerce/wishlist',
              title: 'Wishlist',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/apps/fullcalender',
          title: 'Full Calender',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/apps/gallery',
          title: 'Gallery',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/apps/sweetalerts',
          title: 'Sweetalerts',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Projects',
          type: 'sub',
          badgeClass: 'secondary',
          badgeText: 'secondary',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/projects/project-list',
              title: 'Project List',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/projects/project-overview',
              title: 'Project Overview',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/projects/create-project',
              title: 'Create Project',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Task',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/task/kanban-board',
              title: 'Kanban Board',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/task/list-view',
              title: 'List View',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/task/task-details',
              title: 'Task Details',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Jobs',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/jobs/job-details',
              title: 'Job Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/search-company',
              title: 'Search Company',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/search-jobs',
              title: 'Search Jobs',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/job-post',
              title: 'Job Post',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/jobs-list',
              title: 'Jobs List',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/search-candidate',
              title: 'Search Candidate',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/candidate-details',
              title: 'Candidate Details',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'NFT',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/nft/market-place',
              title: 'Market place',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/nft-details',
              title: 'NFT Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/create-nft',
              title: 'Create NFT',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/wallet-integration',
              title: 'Wallet Integration',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/live-auction',
              title: 'Live auction',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'CRM',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/crm/contacts',
              title: 'Contacts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crm/companies',
              title: 'Companies',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crm/deals',
              title: 'Deals',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crm/leads',
              title: 'Leads',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Crypto',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/crypto/transactions',
              title: 'Transactions',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/currency-exchange',
              title: 'Currency Exchange',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/buy-sell',
              title: 'Buy & Sell',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/marketcap',
              title: 'Marketcap',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/wallet',
              title: 'Wallet',
              type: 'link',
              dirchange: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Nested Menu',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="32 80 128 136 224 80 128 24 32 80" opacity="0.2"/><polyline points="32 176 128 232 224 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="32 128 128 184 224 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="32 80 128 136 224 80 128 24 32 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Nested-1',
          dirchange: false,
          type: 'empty',
          active: false,
          selected: false,
          path: '/nested-menu/nested-1',
        },
        {
          title: 'Nested-2',
          type: 'sub',
          active: false,
          children: [
            {
              title: 'Nested-2.1',
              type: 'empty',
              active: false,
            },
            {
              title: 'Nested-2.2',
              type: 'empty',
              active: false,
              // children: [
              //   {
              //     title: 'Nested-2.2.1',
              //     type: 'empty',
              //     active: false,
              //   },
              //   {
              //     title: 'Nested-2.2.2',
              //     type: 'empty',
              //     active: false,
              //   },
              // ],
            },
          ],
        },
      ],
    },
    {
      title: 'Advanced Ui',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,36a92,92,0,1,0,92,92A92.1,92.1,0,0,0,128,36Z" opacity="0.2"/><line x1="128" y1="64" x2="128" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="104 40 128 64 152 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="104 216 128 192 152 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72.57" y1="96" x2="183.43" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="40 104 72.57 96 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="192 192 183.43 160 216 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72.57" y1="160" x2="183.43" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="64 192 72.57 160 40 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="216 104 183.43 96 192 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/advanced-ui/accordions',
          title: 'Accordions & Collapse',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/carousel',
          title: 'Carousel',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/draggable-cards',
          title: 'Draggable Cards',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/modals-closes',
          title: 'Models & Closes',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/navbar',
          title: 'Navbar',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/offcanvas',
          title: 'OffCanvas',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/placeholders',
          title: 'placeholders',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/rating',
          title: 'Rating',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/ribbons',
          title: 'Ribbons',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/scrollspy',
          title: 'Scrollspy',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/swiperjs',
          title: 'SwiperJs',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/sortable-js',
          title: 'Sortable Js',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Utilites',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="96" r="48" opacity="0.2"/><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/utilities/avatars',
          title: 'Avatars',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/borders',
          title: 'Borders',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/break-point',
          title: 'Break-points',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/colors',
          title: 'Colors',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/columns',
          title: 'Columns',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/flex',
          title: 'Flex',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/gutters',
          title: 'Gutters',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/helper',
          title: 'Helpers',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/position',
          title: 'Position',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/additional-content',
          title: 'Additional-content',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Forms',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Form Elements',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/forms/form-elements/inputs',
              title: 'Inputs',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/checks-radios',
              title: 'Check & Radios',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/inputgroup',
              title: 'Input Group',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/formselect',
              title: 'Form Select',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/range-slider',
              title: 'Range Slider',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/inputmask',
              title: 'Input Mask',
              type: 'link',
              dirchange: false,
            },

            {
              path: '/forms/form-elements/file-uploads',
              title: 'File Uploads',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/datetimepicker',
              title: 'Date Time Picker',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/color-pickers',
              title: 'Color Pickers',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/forms/forms-advanced',
          title: 'Form Advanced',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/floating-labels',
          title: 'Floating Labels',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/form-layouts',
          title: 'Form Layouts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/form-wizards',
          title: 'Form Wizards',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Form Editors',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/forms/form-editor/angular-editor',
              title: 'Angular Editor',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/forms/validation',
          title: 'Validation',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/select2',
          title: 'Select2',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z" opacity="0.2"/><rect x="32" y="80" width="192" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="80" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176.79,31.21c9.34,9.34,9.89,25.06,0,33.82C159.88,80,128,80,128,80s0-31.88,15-48.79C151.73,21.32,167.45,21.87,176.79,31.21Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M79.21,31.21c-9.34,9.34-9.89,25.06,0,33.82C96.12,80,128,80,128,80s0-31.88-15-48.79C104.27,21.32,88.55,21.87,79.21,31.21Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      title: 'Widgets',
      path: '/widgets',
      type: 'link',
      dirchange: false,
      nochild: true,
    },
    {
      title: 'Tables',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="48" y="48" width="160" height="160" rx="8" opacity="0.2"/><rect x="48" y="48" width="160" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="48" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48" y1="128" x2="208" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      active: false,
      selected: false,
      dirchange: false,
      children: [
        {
          path: '/tables/tables',
          title: 'Tables',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/tables/angular-material-tables',
          title: 'Angular material Tables',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/tables/ngx-easy-table',
          title: 'Ngx Easy Table',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Maps',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" opacity="0.2"/><circle cx="128" cy="104" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      active: false,
      selected: false,
      dirchange: false,
      children: [
        {
          path: '/maps/leafletmaps',
          title: 'Leaflet Maps',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/maps/google-map',
          title: 'Google Map',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M54,40H202a8,8,0,0,1,7.69,5.8L224,96H32L46.34,45.8A8,8,0,0,1,54,40Z" opacity="0.2"/><path d="M96,96v16a32,32,0,0,1-64,0V96Z" opacity="0.2"/><path d="M224,96v16a32,32,0,0,1-64,0V96Z" opacity="0.2"/><path d="M48,139.59V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V139.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M54,40H202a8,8,0,0,1,7.69,5.8L224,96H32L46.34,45.8A8,8,0,0,1,54,40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,96v16a32,32,0,0,1-64,0V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,96v16a32,32,0,0,1-64,0V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,96v16a32,32,0,0,1-64,0V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
      path: 'icons',
      title: 'Icons',
      type: 'link',
      dirchange: false,
      nochild: true,
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
