package Kofeavtomat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kofeavtomat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Кофе
 */
@Entity(name = "IISKofeavtomatКофе")
@Table(schema = "public", name = "Кофе")
public class Kofe {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Цена")
    private Double цена;

    @OneToMany(mappedBy = "kofe", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Materialy> materialys;

    @OneToMany(mappedBy = "kofe", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Dopy> dopys;

    @OneToMany(mappedBy = "kofe", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Stakanchik> stakanchiks;


    public Kofe() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }


}