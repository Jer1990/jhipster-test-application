package com.mycompany.myapp.domain;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Task.
 */
@Entity
@Table(name = "task")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Task implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @NotNull
    @Column(name = "is_checked", nullable = false)
    private Boolean isChecked;

    @NotNull
    @Column(name = "date_add", nullable = false)
    private LocalDate dateAdd;

    @NotNull
    @Column(name = "dead_line", nullable = false)
    private LocalDate deadLine;

    @NotNull
    @Column(name = "nombre_task", nullable = false)
    private Integer nombreTask;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Task id(Long id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return this.title;
    }

    public Task title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean getIsChecked() {
        return this.isChecked;
    }

    public Task isChecked(Boolean isChecked) {
        this.isChecked = isChecked;
        return this;
    }

    public void setIsChecked(Boolean isChecked) {
        this.isChecked = isChecked;
    }

    public LocalDate getDateAdd() {
        return this.dateAdd;
    }

    public Task dateAdd(LocalDate dateAdd) {
        this.dateAdd = dateAdd;
        return this;
    }

    public void setDateAdd(LocalDate dateAdd) {
        this.dateAdd = dateAdd;
    }

    public LocalDate getDeadLine() {
        return this.deadLine;
    }

    public Task deadLine(LocalDate deadLine) {
        this.deadLine = deadLine;
        return this;
    }

    public void setDeadLine(LocalDate deadLine) {
        this.deadLine = deadLine;
    }

    public Integer getNombreTask() {
        return this.nombreTask;
    }

    public Task nombreTask(Integer nombreTask) {
        this.nombreTask = nombreTask;
        return this;
    }

    public void setNombreTask(Integer nombreTask) {
        this.nombreTask = nombreTask;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Task)) {
            return false;
        }
        return id != null && id.equals(((Task) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Task{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", isChecked='" + getIsChecked() + "'" +
            ", dateAdd='" + getDateAdd() + "'" +
            ", deadLine='" + getDeadLine() + "'" +
            ", nombreTask=" + getNombreTask() +
            "}";
    }
}
