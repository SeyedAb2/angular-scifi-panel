import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, TemplateRef, inject } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SwitcherComponent } from '../switcher/switcher.component';
import { AppStateService } from '../../services/app-state.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  public localdata:any;

  constructor(private cdr: ChangeDetectorRef, public elementRef: ElementRef,private appStateService: AppStateService,){
    this.appStateService.state$.subscribe(state => {
      this.localdata = state;
    }); 
  }

  ngOnInit(): void {
    let html = document.querySelector('html');
    // html?.removeAttribute('data-card-background');
    html?.setAttribute('data-theme-mode','dark');
    let body = document.querySelector('body');
    body?.classList.add('authentication-background');
  }
  private modalService = inject(NgbModal);
  closeResult = '';
  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
  togglesidebar() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (html?.getAttribute('data-vertical-style') == 'detached') {
      html?.setAttribute(
        'data-toggled',
        html?.getAttribute('data-toggled') == 'detached-close'
          ? 'close'
          : 'detached-close'
      );
    } else if (html?.getAttribute('data-nav-style') == 'menu-click') {
    html?.setAttribute(
      'data-toggled',
      html?.getAttribute('data-toggled') == 'menu-click-closed'
        ? ''
        : 'menu-click-closed'
    );
  } else if (html?.getAttribute('data-nav-style') == 'menu-hover') {
    html?.setAttribute(
      'data-toggled',
      html?.getAttribute('data-toggled') == 'menu-hover-closed'
        ? ''
        : 'menu-hover-closed'
    );
  }else if (html?.getAttribute('data-nav-style') == 'icon-click') {
    html?.setAttribute(
      'data-toggled',
      html?.getAttribute('data-toggled') == 'icon-click-closed'
        ? ''
        : 'icon-click-closed'
    );
  } else if (html?.getAttribute('data-nav-style') == 'icon-hover') {
    html?.setAttribute(
      'data-toggled',
      html?.getAttribute('data-toggled') == 'icon-hover-closed'
        ? ''
        : 'icon-hover-closed'
    );
  } else if (html?.getAttribute('data-vertical-style') == 'overlay') {
    document.querySelector('html')?.getAttribute('data-toggled') != null
      ? document.querySelector('html')?.removeAttribute('data-toggled')
      : document
          .querySelector('html')
          ?.setAttribute('data-toggled', 'icon-overlay-close');
  } else if (html?.getAttribute('data-vertical-style') == 'closed') {
    html?.setAttribute(
      'data-toggled',
      html?.getAttribute('data-toggled') == 'close-menu-close'
        ? ''
        : 'close-menu-close'
    );
  } else if (html?.getAttribute('data-vertical-style') == 'icontext') {
    html?.setAttribute(
      'data-toggled',
      html?.getAttribute('data-toggled') == 'icon-text-close'
        ? ''
        : 'icon-text-close'
    );
  }else if (html?.getAttribute('data-vertical-style') == 'detached') {
    html?.setAttribute(
      'data-toggled',
      html?.getAttribute('data-toggled') == 'detached-close'
        ? ''
        : 'detached-close'
    );
  }else if (html?.getAttribute('data-vertical-style') == 'doublemenu') {
    html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'double-menu-close' && document.querySelector(".slide.open")?.classList.contains("has-sub")? 'double-menu-open': 'double-menu-close' );
  }
  }

// Full Screen event start //
  isFullscreen: boolean = false;

  toggleFullscreen() {
    if (this.isFullscreen) {
      this.exitFullscreen();
    } else {
      this.requestFullscreen();
    }
  }

  @HostListener('document:fullscreenchange', ['$event'])
  handleFullscreenChange(event: any) {
    this.isFullscreen = this.isFullScreen();
    this.cdr.detectChanges(); // Manually trigger change detection
  }
  
  private isFullScreen(): boolean {
    return !!document.fullscreenElement;
  }

  private requestFullscreen() {
    const elem = document.documentElement as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }

  private exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  //Full Screen event close //

  //Toggled Shortcuts 
  private offcanvasService = inject(NgbOffcanvas);

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}
  //Notifications 

  handleCardClick(event: MouseEvent) {
    // Prevent the click event from propagating to the container
    event.stopPropagation();
  }

  // cartItemCount: number = 5;
  notificationCount: number = 4;
  isNotifyEmpty: boolean = false;

  removeNotify(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.notificationCount--;
    this.isNotifyEmpty = this.notificationCount === 0;
  }

  toggleSwitcher() {
    this.offcanvasService.open(SwitcherComponent, {
      position: 'end',
      scroll: true,
    });
  }
}