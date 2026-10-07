::: {.list}

<% for (let index = 0; index < items.length; index++) { %> 
<% const item = items[index]; %> 

```{=html}
<article class="fc-catalog-card fc-portfolio-card">
  <a class="fc-catalog-card-link" href="<%- item.path %>">
    <div class="fc-catalog-card-topline">
      <span class="fc-catalog-number">
        <%= String(item.unit_order).padStart(2, "0") %>
      </span>

      <span class="fc-catalog-stage">
        <%= item.unit_level %>
      </span>
    </div>

    <h3><%= item.title %></h3>

    <div class="fc-catalog-description">
      <%= item.description %>
    </div>

    <dl class="fc-course-facts">
      <div>
        <dt>Level</dt>
        <dd><%= item.unit_level %></dd>
      </div>
      <div>
        <dt>Time</dt>
        <dd><%= item.estimated_time %></dd>
      </div>
    </dl>

    <div class="fc-catalog-card-footer">
      <span class="fc-catalog-open">
        View unit <span aria-hidden="true">→</span>
      </span>
    </div>
  </a>
</article>
```

<% } %>

:::
