import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  items: BreadcrumbItem[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.generateBreadcrumb();
      }
    });
  }

  generateBreadcrumb(): void {
    const rootRoute = this.activatedRoute.snapshot;
    this.items = this.getBreadcrumbItems(rootRoute);
  }

  private getBreadcrumbItems(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: BreadcrumbItem[] = []
  ): BreadcrumbItem[] {
    const children: ActivatedRouteSnapshot[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ label, url });
      }

      const result = this.getBreadcrumbItems(child, url, breadcrumbs);
      if (result) {
        return result;
      }
    }

    return breadcrumbs;
  }
}

interface BreadcrumbItem {
  label: string;
  url: string;
}

